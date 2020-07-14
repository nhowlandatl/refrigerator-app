import React from 'react';
import logo from './assets/fridge_with_open_door_80px.png';
import fridge from './assets/fridge-QKKKFUJ.jpg';
import feature1 from './assets/cutlery_64px.png';
import feature2 from './assets/mobile_64px.png';
import feature3 from './assets/ingredients_80px.png';
import recipeFeature from './assets/recipe-feature.jpg';
import notificationFeature from './assets/notification-feature.jpg';
import foodWasteFeature from './assets/food-waste-feature.jpg';
import LoginModal from './LoginModal';
import './FullPageIntroWithFixedNavbar.css';

import { MDBNavbar, MDBNav, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBCardText, MDBCard, MDBCol, MDBRow, MDBCardBody, MDBCardTitle } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class FullPageIntroWithFixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      modalOpen: false
    };
    this.onClick = this.onClick.bind(this); 
  }
// Open login modal
  handleModalOpen = () => {
    this.setState((prevState) => {
       return{
          modalOpen: !prevState.modalOpen
       }
    })
  }
// Collapsable navbar when page is narrowed
  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="green" dark expand="md" fixed="top">  
              <MDBNavbarBrand className="lobster" href="/">
                  FridgeBuddy
                  <img
                    alt=""
                    src={logo}
                    className="d-inline-block"
                  />{' '}
                </MDBNavbarBrand>
                <MDBNav className="justify-content-center">
                {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                <MDBCollapse isOpen={this.state.collapse} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="#">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#">Features</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <a onClick={this.handleModalOpen} className="nav-link">
                            Log In
                        </a>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNav>
            </MDBNavbar>
          </Router>
          <MDBContainer style={{paddingTop: '15rem', paddingLeft: '10rem', paddingRight: '10rem'}}  className="text-black text-center" >
              <MDBRow className="mx-auto my-auto text-center">
                <MDBCol size="6">
                  <h2>Preventing Food Waste and Saving You Money</h2>
                  <br />
                  <h5>Fridge Buddy keeps track of what's in your fridge, makes recipe suggestions, and can send notifications to your phone reminding you when items are about to spoil</h5>
                </MDBCol>
                <MDBCol size="6">
                  <img src={fridge} className="img-fluid" alt="" />
                </MDBCol>
              </MDBRow>
          </MDBContainer> 
        </header>
      
        <main>
          {/* Short summary of features */}
          <MDBContainer className="text-center my-5">
            <h2> Our features </h2>
            <br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non assumenda odit debitis, error quibusdam natus delectus perferendis ut numquam officia qui ea veritatis iste architecto eaque! Qui, repellendus nulla.</p>
            <MDBRow className="mx-auto my-auto" style={{paddingTop: '3rem'}}>
                <MDBCol xs="12" sm="12" md="4">
                  <MDBCard>
                    <img className="img-fluid mx-auto" src={feature1} alt=""/>
                    <MDBCardBody>
                      <MDBCardTitle>Amazing feature 1</MDBCardTitle>
                      <MDBCardText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae sit consequatur veniam odit possimus, dignissimos, rerum itaque minus sequi commodi neque repellendus vero quia sed. Animi beatae voluptatibus itaque cum?
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol xs="12" sm="12" md="4">
                  <MDBCard>
                    <img className="img-fluid mx-auto" src={feature2} alt=""/>
                    <MDBCardBody>
                      <MDBCardTitle>Amazing feature 2</MDBCardTitle>
                      <MDBCardText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae sit consequatur veniam odit possimus, dignissimos, rerum itaque minus sequi commodi neque repellendus vero quia sed. Animi beatae voluptatibus itaque cum?
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol xs="12" sm="12" md="4">
                  <MDBCard>
                    <img className="img-fluid mx-auto" src={feature3} alt=""/>
                    <MDBCardBody>
                      <MDBCardTitle>Amazing feature 3</MDBCardTitle>
                      <MDBCardText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae sit consequatur veniam odit possimus, dignissimos, rerum itaque minus sequi commodi neque repellendus vero quia sed. Animi beatae voluptatibus itaque cum?
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
          </MDBContainer>

          {/* How the feature looks when used */}
          <MDBContainer className="text-center my-5">
            <MDBRow className="mx-auto my-auto" style={{paddingTop: '3rem'}}>
              <MDBCol size="6" className="mx-auto my-auto" >
                <h2>This is really cool</h2>
                <p>See image on right (which I need to resize)</p>
              </MDBCol>
              <MDBCol size="6">                 
                <img className="img-fluid mx-auto" src={recipeFeature} alt=""/>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mx-auto my-auto" style={{paddingTop: '3rem'}}>
              <MDBCol size="6">                 
                  <img className="img-fluid mx-auto" src={notificationFeature} alt=""/>
              </MDBCol>
              <MDBCol size="6" className="mx-auto my-auto" >
                <h2>This is also really cool</h2>
                <p>See image on left (which I need to resize)</p>
              </MDBCol>    
            </MDBRow>
            <MDBRow className="mx-auto my-auto" style={{paddingTop: '3rem'}}>
              <MDBCol size="6" className="mx-auto my-auto" >
                <h2>This is really cool</h2>
                <p>See image on right (which I need to resize)</p>
              </MDBCol>
              <MDBCol size="6">                 
                <img className="img-fluid mx-auto" src={foodWasteFeature} alt=""/>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </main>
        <LoginModal
           modalOpen={this.state.modalOpen}
           handleModalOpen={this.handleModalOpen}
        />
      </div>
    );
  }
}

export default FullPageIntroWithFixedNavbar;