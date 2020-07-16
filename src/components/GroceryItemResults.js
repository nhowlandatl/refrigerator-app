import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Button } from 'react-bootstrap'; 
import { MDBCard, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

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
  const recipes = this.props.recipes;
    return (
      <MDBContainer>
        <MDBRow>
            {recipes.map(recipe => {
              // Axios button function to get recipe info based on recipe ID
              return (
                <MDBCol size="3" className='justify-content-center'>
                  <MDBCard>
                    {recipe.title}
                    <img src={recipe.image}/>
                    {this.props.recipes.length > 1 &&
                      // Conditionally generate Recipe info button after recipe titles area rendered
                      <Button variant="outline-secondary" onClick={() => this.handleRecipe(recipe.id)}>Get recipe details</Button>
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
  // Get recipe info from API and pass to RecipeInfo component for modal rendering
  handleRecipe = id => {
    return axios({
      "method":"GET",
      "url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key":"40cb3a8377mshdada20219265609p14adc3jsn41c73db521e2",
      "useQueryString":true
      }
      })
      .then((response)=>{
        this.props.getRecipeInfo(response.data)
        console.log(this.props.recipeInfo)
      })
      .catch((error)=>{
        console.log(error)
      })         
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
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(GroceryItemResults);