import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { MDBBtn } from 'mdbreact'; 

// Using react hooks here, I think

// Take in open/close toggle prop from main page
const LoginModal = (props) => { 
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   // validate if an email address with @ symbol and password is input; else popup error
   function validateForm() {
      return email.length > 0 && password.length > 0;
    }

   // local state tracking keyboard input for email form
   const handleChangeEmail = e => {
      setEmail(e.target.value)
   }

   // local state tracking keyboard input for password form
   const handleChangePassword = e => {
      setPassword(e.target.value)
   }

   // Eventually hit the backend to validate info, then redirect to main page
   async function handleSubmit(event) {
      alert(email)
      event.preventDefault();
   }
   // Show the login div when "Log In" is closed on nav bar
   return (
      <div>
         <Modal show={props.modalOpen} onHide={props.handleModalOpen}>
         <form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
               <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <FormGroup controlId="email" bsSize="large">
                  <FormLabel>Email</FormLabel>
                  <FormControl
                     autoFocus
                     type="email"
                     value={email}
                     onChange={handleChangeEmail}
                     // onChange={e => handleChangeEmail(e.target.value)} 
                  />
               </FormGroup>
               <FormGroup controlId="password" bsSize="large">
                  <FormLabel>Password</FormLabel>
                  <FormControl
                     // onChange={e => handleChangePassword(e.target.value)} 
                     type="password"
                     value={password}
                     onChange={handleChangePassword}
                  />
               </FormGroup>
            </Modal.Body>
            <Modal.Footer>
               {/* Make this a conditional render; if something is typed in both the login/password box, show this */}
               <MDBBtn variant="primary" disabled={!validateForm()} type="submit">
                  Login
               </MDBBtn>
               <MDBBtn variant="danger" onClick={props.handleModalOpen}>
                  Cancel
               </MDBBtn>
            </Modal.Footer>
            </form>
         </Modal>
      </div>
   );
}

export default LoginModal;


// Email:
//                      <input
//                         type="text"
//                         value={email}
//                         onChange={handleChangeEmail}
//                      />
//                   Password:
//                      <input
//                         type="text"
//                         value={password}
//                         onChange={handleChangePassword}
//                      />


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