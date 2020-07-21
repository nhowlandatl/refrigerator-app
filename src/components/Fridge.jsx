import React, { Component } from "react";
import { connect } from "react-redux";
// Import React components
import axiosBearer from "../utils/axiosBearer";
import axiosWithAuth from "../utils/axiosBearer";
import {
  MDBContainer,
  MDBCardText,
  MDBCard,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
  MDBCardImage,
} from "mdbreact";
import "./FullPageIntroWithFixedNavbar.css";

export class Fridge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  // After loading users fridge, load all their database items and render to screen
  componentDidMount() {
    axiosBearer("/userItems").then((res) => {
      console.log(res.data);
      this.setState({ items: res.data });
    });
  }
  // Delete item from fridge
  onDelete(item) {
    const product = {
      id: item.id,
    };
    axiosWithAuth("/delete", product, "DELETE").then((res) => {
      console.log(res.data);
    });
    axiosBearer("/userItems").then((res) => {
      console.log(res.data);
      this.setState({ items: res.data });
    });
  }

  render() {
    return (
      <MDBContainer className="header-padding">
        <h2>Welcome to Your Fridge!</h2>
        <h5>Here is what's currently in your fridge.</h5>
        <MDBRow>
          {this.state.items.map((item) => {
            return (
              <MDBCol size="3" className="padding justify-content-center">
                <MDBCard className="card align-items-center padding h-100">
                  {item.product_name}
                  <MDBCardImage
                    className="img-fluid padding"
                    src={item.product_image}
                    alt=""
                  />
                  <MDBBtn
                    className="mt-auto"
                    color="red"
                    onClick={() => {
                      this.onDelete(item);
                      alert("This item was removed from your fridge");
                    }}
                  >
                    Remove item from fridge
                  </MDBBtn>
                </MDBCard>
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Fridge;
