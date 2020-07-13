import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FullPageIntroWithFixedNavbar from './components/FullPageIntroWithFixedNavbar';
// import LoginModal from './components/LoginModal' 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FullPageIntroWithFixedNavbar/>
         
      </BrowserRouter>
    </div>
  );
}

export default App;
