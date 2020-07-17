import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBCard, MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class GroceryItemResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearRecipes = this.clearRecipes.bind(this);
  }
  render() { 
  // Create each ingredient card
  const items = this.props.recipes;
    return (
      <MDBContainer>
        <MDBRow>
            {items.map(item => {
              return (
                <MDBCol size="3" className='justify-content-center'>
                  <MDBCard>
                    {item.title}
                    <img src={item.image}/>
                    {this.props.recipes.length > 1 && 
                    <MDBBtn onClick={() => {this.props.addToFridge(item)}}>Add to Fridge</MDBBtn>
                    }
                  </MDBCard>
                </MDBCol>
              )
            })}
        </MDBRow> 
      </MDBContainer>
    )
  }
  // Clear ingredients on screen
  handleSubmit(event) {
    this.props.clearResults(); 
    event.preventDefault();
  }
  // Clear recipes on screen
  clearRecipes(event) {
    this.props.clearRecipes(); 
    event.preventDefault();
  }

}
  
  function mapStateToProps(state) {
    return {
      recipes: state.recipes,
      ingredients: state.ingredients,
      recipeInfo: state.recipeInfo 
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      clearResults: function() {
        dispatch({type: 'RESET_ITEM'})
      },
      getRecipeInfo: function(recipeInfo) {
        dispatch({type: 'RECIPE_INFO', payload: recipeInfo})
      },
      clearRecipes: function() {
        dispatch({type: 'RESET_RECIPES'})
      },
      addToFridge: function(itemInfo) {
        dispatch({type: 'ADD_ITEM_TO_FRIDGE', payload: itemInfo})
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(GroceryItemResults);