import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { FormControl, Button, InputGroup } from 'react-bootstrap';  
import { MDBInput, MDBContainer, MDBBtn } from "mdbreact";

class SearchForm extends Component {
// Use local state for what's being typed
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

  }

// Ingredient list maps to Redux store
  handleChange = (event) => {    
    this.setState({value: event.target.value});
    console.log(this.props.isAuth)  
  }
// Kick off add ingredient function on submit
  handleSubmit = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
    this.addIngredient(); 
  }
  // Add ingredient function and validate not blank
  addIngredient = () => {
    if (this.state.value.length === 0) {
    } else
// Add the local react state value (what was just typed) to the redux store as an ingredient
    this.props.addIngredient(this.state.value);
    console.log(this.props.ingredients)
  }
    render() {
      return (
        // Enter ingredient prompt w/ empty string validation
        <MDBContainer>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2>Search for a food item to add to your fridge!</h2>
          <form
            className="needs-validation"
            onSubmit={this.handleSubmit}
            noValidate
            >
              <MDBInput
              material
              value={this.state.value}
              onChange={this.handleChange}
              type="text"
              id="defaultFormRegisterPasswordEx4"
              className="form-control"
              name="food item"
              placeholder="search here"
              required
              >
              <MDBBtn color="green" className="m-1 px-3 py-2" type="submit">Search for food item</MDBBtn>
               <div className="invalid-tooltip">
                Please enter a food item.
                </div>
              </MDBInput>
          </form>
        </MDBContainer>

        )
    }
}

function mapStateToProps(state) {
  return {
    ingredients: state.ingredients,
    isAuth: state.isAuth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addIngredient: function(ingredient) {
      dispatch({type: 'ADD_INGREDIENT', payload: ingredient})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);