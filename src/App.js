import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FullPageIntroWithFixedNavbar from './components/FullPageIntroWithFixedNavbar';
import NavbarFixed from './components/NavbarFixed';
import MyFoodItem from './components/MyFoodItem';
import SearchForm from './components/SearchForm';
import GroceryItem from './components/GroceryItem';
import GroceryItemResults from './components/GroceryItemResults';
import AboutUs from './components/AboutUs';
import Fridge from './components/Fridge';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarFixed/>
        <Route exact path="/" component={FullPageIntroWithFixedNavbar} />
        <Route
          path="/SearchForm"
          component={SearchForm} />
        <Route
          path="/AboutUs"
          component={AboutUs} />
        <Route
          path="/MyFridge"
          component={Fridge} />
        <MyFoodItem />
        <GroceryItem />
        <GroceryItemResults />
      </BrowserRouter>
    </div>
  );
}

export default App;
