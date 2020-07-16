import React from 'react';
import './App.css';
import Login from './components/login';
import Fridge from './components/Fridge';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FullPageIntroWithFixedNavbar from './components/FullPageIntroWithFixedNavbar';
import Dashboard from './components/Dashboard';
import NavbarFixed from './components/NavbarFixed';
// import LoginModal from './components/LoginModal' 

function App() {
  return (
    <div className="App">
      <Fridge />
      {/* <Login />
      <BrowserRouter>
        <NavbarFixed/>
        <Route exact path="/" component={FullPageIntroWithFixedNavbar} />
        <Route path="/dashboard" component={Dashboard} />
        <FullPageIntroWithFixedNavbar/> 
      </BrowserRouter> */}
    </div>
  );
}

export default App;
