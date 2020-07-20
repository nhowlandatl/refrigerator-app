import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBCard,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardImage,
} from "mdbreact";
import axiosWithAuth from "../utils/axiosBearer";

class GroceryItemResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearRecipes = this.clearRecipes.bind(this);
  }

  // SaveToFridge refers to saving to database. addToFridge refers to the redux action.
  // We could consider refactoring to redux thunk middleware
  SaveToFridge = (item) => {
    // debugger
    const product = {
      product_id: item.id,
      product_image: item.image,
      product_name: item.title,
    };
    axiosWithAuth("/addItem", product, "POST").then((res) => {
      console.log(res.data);
      this.props.addToFridge(item);
    });
  };

  render() {
    // Create each ingredient card
    const items = this.props.recipes;
    return (
      <MDBContainer>
        <MDBRow>
          {items.map((item) => {
            return (
              <MDBCol size="3" className="padding justify-content-center">
                {this.props.recipes.length > 1 && (
                  <MDBCard className="card align-items-center padding h-100">
                    {item.title}
                    <MDBCardImage
                      className="img-fluid padding"
                      src={item.image}
                    />
                    <MDBBtn
                      className="mt-auto"
                      color="green"
                      onClick={() => {
                        this.SaveToFridge(item);
                      }}
                    >
                      Add to Fridge
                    </MDBBtn>
                  </MDBCard>
                )}
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
    );
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
    recipeInfo: state.recipeInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearResults: function () {
      dispatch({ type: "RESET_ITEM" });
    },
    getRecipeInfo: function (recipeInfo) {
      dispatch({ type: "RECIPE_INFO", payload: recipeInfo });
    },
    clearRecipes: function () {
      dispatch({ type: "RESET_RECIPES" });
    },
    addToFridge: function (itemInfo) {
      dispatch({ type: "ADD_ITEM_TO_FRIDGE", payload: itemInfo });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItemResults);
