import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { MDBIcon, MDBBtn, MDBModal, MDBModalHeader } from 'mdbreact';


const LoginModal = (props) => { 
    return (
        <>
          <Modal show={props.modalOpen} onHide={props.handleModalOpen}>
              <Modal.Header closeButton>
                 <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>...</Modal.Body>
              <Modal.Footer>
                 <Button variant="danger" onClick={props.handleModalOpen}>
                    Cancel
                 </Button>
              </Modal.Footer>
          </Modal>
        </>
     );
}

export default LoginModal;


// import React, { Component } from 'react'
// // import { axios } from "axios"; 
// import { MDBIcon, MDBBtn, MDBModal, MDBModalHeader } from 'mdbreact';

// class LoginModal extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             email: '',
//             password: '',
//             modal14: false
//         }
//     }

//     // Local state to handle input
//     handleChange = (event) => {
//         this.setState({[event.target.name]: event.target.value})
//         console.log(event.target.value)
//     }

//     // Toggle state on/off for login modal
//     toggle = nr => () => {
//         let modalNumber = 'modal' + nr
//         this.setState({
//           [modalNumber]: !this.state[modalNumber]
//         });
//     }

//     // Work in progress. Will submit info to database.
//     handleSubmit = (event) => {
//         event.preventDefault()
//         console.log(this.state)
//         // axios.post('/', {
//         //     email: this.state.email

//         // })
//     }

//     // Making login a pretty modal popup
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <MDBBtn color="primary" onClick={this.toggle(14)}>Click here to log on</MDBBtn>
//                 <MDBModal isOpen={this.state.modal14} centered>
//                     <MDBBtn color="primary" onClick={this.toggle(14)}>Close</MDBBtn>
//                     <MDBModalHeader >
//                         <MDBIcon icon='utensils' className="cyan-text" style={{marginRight: "1rem"}}/>
                           
//                     </MDBModalHeader>
                   
                    
//                     <br></br>
                    
//                 </MDBModal>

//                 <input type="email" name="email" value={this.state.email} required onChange={this.handleChange}/>
//                 <input type="password" name="password" value={this.state.password} required onChange={this.handleChange}/>
//                 <button type="submit">Submit</button>

//             </form>
//         )
//     }
// }

// export default LoginModal