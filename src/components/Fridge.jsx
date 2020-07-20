import React, { Component } from 'react'
//MATERIAL UI Components below
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
//Import React components
import Item from './Item';
import AddItems from './AddItems';
import axiosBearer from '../utils/axiosBearer';
import { MDBContainer, MDBCardText, MDBCard, MDBCol, MDBRow, MDBCardBody, MDBCardTitle } from 'mdbreact';
import { MDBBtn } from 'mdbreact';
import axios from 'axios';

//Working on a Dark Mode
// function toggleDarkMode() {
//     var element = document.getElementById("dashContainer");
//     element.classList.toggle("dark-mode");
//     element.style.backgroundImage = 'url("dark_mode_option2.jpg")';
//  }

function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
}

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
        console.log(item)
        axios
            .delete('/delete', { 
                id: item  
            })
            .then(response => {
                console.log(response)
            })
    }
    render() {
        return (
            <MDBContainer style={{paddingTop: '5rem', paddingLeft: '10rem', paddingRight: '10rem'}}>
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
                            <MDBBtn onClick={() => this.onDelete(item.id)}>Remove item from fridge</MDBBtn>
                        </MDBCard>
                    </MDBCol>
                    );
                })}
                </MDBRow>
            </MDBContainer>
            
        )
    }
}

export default Fridge

// {/* <div id="dashContainer">
//                 {/* Left menu */}
//                 <div id="sideBar">
//                     {/* <button onClick={() => toggleDarkMode()}>Toggle dark mode</button> */}
//                     <ul id="sideBarLinks">
//                         <a href="..."><li>Fridge</li></a>
//                         <a href="..."><li>Freezer</li></a>
//                         <a href="..."><li>Pantry</li></a>
//                         {/* <a href="..."><li>Get Recipes</li></a> */}
//                     </ul>
//                 </div>
//                 {/* Main Container */}
//                 <div id="fridgeContainer">
//                     {/* Top Div with search bar and optional login info */}
//                     <div id="topDiv">
//                         <AddItems />
//                         <div id="searchBar">
//                             <Input></Input>
//                             <Button variant="contained" color="secondary">Search Your Fridge</Button>
//                         </div>
//                         <div id="userProfile">
//                             <p>Jane Doe</p>
//                             <Avatar></Avatar>
//                         </div>
//                     </div>
//                     {/* Expiring Soon Section */}
//                     <h3 className="itemHeader" style={{ color: "red" }}>Expiring Soon:</h3>
//                     <div id="expiringSoon">
//                         <Item />
//                     </div>
//                     {/* Optional Category Options */}
//                     <h3 className="itemHeader">Produce:</h3>
//                     <div className="categoryItems">
//                         <Item />
//                     </div>
//                     {/* Optional Category Options */}
//                     <h3 className="itemHeader">Dairy:</h3>
//                     <div className="categoryItems">
//                         <Item />
//                     </div>
//                 </div>
//             </div> */}