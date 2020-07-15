import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { MDBBtn } from 'mdbreact'; 
import axios from 'axios';
import { Link } from 'react-router-dom'
// Using react hooks here to pass in the open/close status for this modal

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

   // Hit the backend to validate info/check if user exists, then redirect to dashboard
   // Needs to be an axios.post using what was collected here
   async function handleSubmit(event) {
      console.log(event)
      // this could retrieve a user object from the login, and send that to your backend. Have redux status of "isLoggedIn = true" -> then save the user info to redux store. 
      // Need to have passport session... 
      axios.post('/login', {
         email: email,
         password: password
      })
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