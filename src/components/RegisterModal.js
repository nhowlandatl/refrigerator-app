import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { MDBBtn } from 'mdbreact'; 
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import ReactDOM from 'react-dom'

// Using react hooks here to pass in the open/close status for this modal
// Rename to RegisterModal later

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

   // Hit the backend to register or check if user already exists, then redirect to login
   async function handleSubmit(event) {
      event.preventDefault();
      console.log(email)
      console.log(password)
      // this could retrieve a user object from the login, and send that to your backend. Have redux status of "isLoggedIn = true" -> then save the user info to redux store. 
      // Need to have passport session... 
      axios
         .post('/register', {
            email: email,
            password: password
         }).then(res => {
            res.redirect('/dashboard')
         })
         
         // what now? automatically authenticate? redirect to login page?
   }  

   // async function googleSubmit() {
   //    axios.get('auth/google')
   //    .then(function (response) {
   //      console.log(response);
   //    })
   //    .catch(function (error) {
   //      console.log(error);
   //    });
   // }
   
   // Show the login div when "Log In" is closed on nav bar
   return (
      <div>
         <Modal show={props.modalOpen} onHide={props.handleModalOpen}>
         <form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
               <Modal.Title>Register</Modal.Title>
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
                  Register
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