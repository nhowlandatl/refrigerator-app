import React, { Component } from 'react';
import { MDBNavbar, MDBNav, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import RegisterModal from './RegisterModal';
import logo from './assets/fridge_with_open_door_80px.png';

export class NavbarFixed extends Component {
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
                <MDBNavbar color="indigo" dark expand="md" fixed="top" className="justify-content-center">  
              <MDBNav>
              <MDBNavbarBrand href="/">
                  <img
                    alt=""
                    src={logo}
                    className="d-inline-block"
                  />{' '}
                </MDBNavbarBrand>
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
                        Register
                      </a>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNav>
            </MDBNavbar>
            <RegisterModal
           modalOpen={this.state.modalOpen}
           handleModalOpen={this.handleModalOpen}
            />
            </div>
        )
    }
}

export default NavbarFixed
