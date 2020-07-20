import React, { Component } from 'react'
import { connect } from "react-redux";
// Import React components
import axiosBearer from '../utils/axiosBearer';
import axiosWithAuth from '../utils/axiosBearer';
import { MDBContainer, MDBCardText, MDBCard, MDBCol, MDBRow, MDBCardBody, MDBCardTitle, MDBBtn } from 'mdbreact';

export class Fridge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    // After loading users fridge, load all their database items and render to screen
    componentDidMount() {
        axiosBearer('/userItems').then(res => {
            console.log(res.data)
            this.setState({ items: res.data })
        })
    }
    // Delete item from fridge
    onDelete(item) {
        const product = {
            id: item.id
          }
        axiosWithAuth('/delete', product, 'DELETE')
        .then((res) => {
            console.log(res.data);
        })
        axiosBearer('/userItems').then(res => {
            console.log(res.data)
            this.setState({ items: res.data })
        })
    }

    render() {
        return (
            <MDBContainer id="dashContainer" style={{paddingTop: '5rem', paddingLeft: '10rem', paddingRight: '10rem'}}>
                <MDBContainer className="text-center my-5">
                     <h2> Your Fridge </h2>
                </MDBContainer>
                <MDBRow>
                {this.state.items.map((item) => {
                    return (
                    <MDBCol size="3" className="justify-content-center">
                        <MDBCard>
                            <img src={item.product_image} alt=""/>
                            {item.product_name}
                            <MDBBtn onClick={() => this.onDelete(item)}>Remove item from fridge</MDBBtn>
                        </MDBCard>
                    </MDBCol>
                    );
                })}
                </MDBRow>
            </MDBContainer>
            
        )
    }
}


export default(Fridge); 