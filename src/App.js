import React from 'react';
import './App.css';
import Login from './components/login';
import Fridge from './components/Fridge';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FullPageIntroWithFixedNavbar from './components/FullPageIntroWithFixedNavbar';
import AddItems from './components/AddItems';
// import LoginModal from './components/LoginModal' 

function App() {
  return (
    <div className="App">
      <AddItems />
      {/* <Fridge /> */}
      {/* <Login />
      <BrowserRouter>
        <FullPageIntroWithFixedNavbar/> 
      </BrowserRouter> */}
    </div>
  );
}

export default App;
