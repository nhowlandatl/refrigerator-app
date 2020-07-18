import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap'; 
import { MDBContainer, MDBCol, MDBIcon } from "mdbreact";

class MyFoodItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
    render() { 
        // Create each ingredient card
        let ingredientCard = this.props.items.map(ingredient => {
            return (
                <MDBCol className="d-inline border border-dark">
                {ingredient}
                <MDBIcon className="red-text"
                  style={{float: 'right' }} 
                  onClick={() => this.deleteIngredient(ingredient) } icon="times-circle" />
                </MDBCol>
            )
        })
      // Display all the items inside a card deck
        return (
                <div>
                    <MDBContainer className="mt-5">
                         <Row xs={2} md={4} lg={6}>
                            {ingredientCard}
                         </Row>
                    </MDBContainer>
                </div>
            )
      }
    deleteIngredient(ing) {
      this.props.deleteIngredient(ing); 
    }
  }

  function mapStateToProps(state) {
    return {
      items: state.items 
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      deleteIngredient: function(ingredient) {
        dispatch({type: 'DELETE_INGREDIENT', payload: ingredient})
      }
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(MyFoodItem);