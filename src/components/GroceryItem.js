import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Button } from 'react-bootstrap'; 

class GroceryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
// Conditional statement: if ingredient array is populated, generate a submit recipe button
  render() {
    if (this.props.ingredients.length > 0 ) {
      return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {this.props.ingredients.length >= 1 &&
            // Generate clear screen button after recipes are generated
            <Button variant="outline-secondary" onClick={this.handleSubmit}>Click to find recipes</Button>
          }  
        </div>
      )
    }
    else return null
  }
  
  // Kick off the find recipe function on submit
  handleSubmit(event) {
    // Convert the ingredient array into a string for Axios get request
    this.getRecipe(); 
    event.preventDefault();
  }
  
  // Get recipe function
    getRecipe = () => {
      // Make a string of ingredients to pass into API get request
      let recipeString = this.props.ingredients.join(',');
      console.log(recipeString);
      return axios({
        "method":"GET",
        "url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key":"40cb3a8377mshdada20219265609p14adc3jsn41c73db521e2",
        "useQueryString":true
        },"params":{
        "number":"20",
        "ranking":"1",
        "ignorePantry":"false",
        "ingredients": `${recipeString}`
        }
        })
        .then((response)=>{
          // Dispatches the action to redux
          console.log(response.data)
          this.props.getRecipe(response.data);
          // Clear the recipeString after submit
          recipeString = ''
        })
        .catch((error)=>{
          console.log(error)
        })
    }
}

function mapDispatchToProps(dispatch) {
  return {
    // Pass in recipes to redux store (this is an array of recipes)
    // It's passed in as a payload that contains all the data
    getRecipe: function(recipes) {
      dispatch({type: 'GET_RECIPE', payload: recipes})
    }
  }
}

function mapStateToProps(state) {
  return {
    ingredients: state.ingredients,
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItem);