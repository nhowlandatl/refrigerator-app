import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap'; 
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { MDBIcon, MDBBtn, MDBModal, MDBModalHeader } from 'mdbreact';

class GroceryItemInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal14: true
        };
        // Clear recipe button bind
        this.clearRecipes = this.clearRecipes.bind(this);
    }
    // Clear modal toggle function
    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
    }
    // Clear the recipeInfo redux store after closing modal
    onCloseModal = () => {
        this.clearRecipeInfo();
      }
    render() {
        const htmlRecipeSummary = `<div>${this.props.recipeInfo.summary}</div>`
        const recipeImage = this.props.recipeInfo.image;
        const recipeTitle = this.props.recipeInfo.title;
        return (
            <div>
                {this.props.recipeInfo && 
                    <MDBModal isOpen={this.state.modal14} centered>
                        <MDBBtn data-dismiss="modal" onClick={()=>this.onCloseModal()}>Close</MDBBtn>
                        <MDBModalHeader >
                            <MDBIcon icon='utensils' className="cyan-text" style={{marginRight: "1rem"}}/>
                            {recipeTitle}
                        </MDBModalHeader>
                        <img src={`${recipeImage}`} alt=""/>
                        {ReactHtmlParser(htmlRecipeSummary)}
                        <br></br>
                        <a href={this.props.recipeInfo.sourceUrl}>Get detailed cooking instructions here!</a>
                    </MDBModal>
                // Generate Recipe info if get recipe info is clicked
                // Want to add an "X" button here to close the recipe info
                }
            </div>
        )
    }
    clearRecipes(event) {
        this.props.clearRecipes(); 
        event.preventDefault();
    }
    clearRecipeInfo() {
        this.props.clearRecipeInfo();
    }
}

function mapDispatchToProps(dispatch) {
    return {
      clearRecipes: function() {
        dispatch({type: 'RESET_RECIPES'})
        },
    clearRecipeInfo: function() {
        dispatch({type: 'RECIPE_INFO_CLEAR'})
        }
    }
  }

function mapStateToProps(state) {
    return {
      recipeInfo: state.recipeInfo,
      recipes: state.recipes
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItemInfo);