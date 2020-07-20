// This will suggest results as you type in the search bar. It would require a lot more coding to make this useful, however. 
import React, { Component } from "react";
import { connect } from "react-redux";
// import { FormControl, Button, InputGroup } from 'react-bootstrap';
import { MDBInput, MDBContainer, MDBBtn } from "mdbreact";
import axios from "axios";
import Suggestions from "./Suggestions";

class SearchForm extends Component {
  // Use local state for what's being typed
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      query: "",
      results: [],
      // apiResponse: ""
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // //Handling API call
  // callAPI() {
  //   fetch("http://localhost:5001/apicall")
  //       .then(res => res.text())
  //       .then(res => this.setState({ apiResponse: res }));
  // }
  // componentDidMount() {
  //     this.callAPI();
  // }

  // Ingredient list maps to Redux store
  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value,
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        }
      }
    );
  };
  // Kick off add ingredient function on submit
  handleSubmit(event) {
    event.preventDefault();
    event.target.className += " was-validated";
    this.addIngredient();
  }
  // Add ingredient function and validate not blank
  addIngredient = () => {
    if (this.state.value.length === 0) {
    }
    // Add the local react state value (what was just typed) to the redux store as an ingredient
    else this.props.addIngredient(this.state.value);
    console.log(this.props.ingredients);
  };

  getInfo = () => {
    axios({
    "method":"GET",
    "url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/suggest",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key":"40cb3a8377mshdada20219265609p14adc3jsn41c73db521e2",
    "useQueryString":true
    },"params":
    {
    "number":"10",
    "query": `${this.state.query}`
    }
  }).then(({ data }) => {
    this.setState({
      results: data.results
    })
  })
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
        <form>
          <input
            placeholder="Search for..."
            ref={(input) => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <Suggestions results={this.state.results} />
        </form>
      </MDBContainer>
      // Initial working form input
      // <div>
      //     <InputGroup className="mb-3">
      //       <InputGroup.Prepend>
      //         <Button variant="outline-secondary" onClick={this.handleSubmit}>Click to add ingredient</Button>
      //       </InputGroup.Prepend>
      //       <FormControl aria-describedby="basic-addon1" type="text" value={this.state.value} placeholder="Enter an ingredient" onChange={this.handleChange}/>
      //     </InputGroup>
      // </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ingredients: state.ingredients,
    isAuth: state.isAuth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRecipe: function (recipes) {
      dispatch({ type: "GET_RECIPE", payload: recipes });
    },
    addIngredient: function (ingredient) {
      dispatch({ type: "ADD_INGREDIENT", payload: ingredient });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
