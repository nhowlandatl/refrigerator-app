import React from 'react';
import './App.css';
// import Login from './components/login';
// import Fridge from './components/Fridge';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FullPageIntroWithFixedNavbar from './components/FullPageIntroWithFixedNavbar';
import Dashboard from './components/Dashboard';
import NavbarFixed from './components/NavbarFixed';
import MyFoodItem from './components/MyFoodItem';
import SearchForm from './components/SearchForm';
import GroceryItem from './components/GroceryItem';
import GroceryItemInfo from './components/GroceryItemInfo';
import GroceryItemResults from './components/GroceryItemResults';
import AddItems from './components/AddItems';
import AboutUs from './components/AboutUs';
import Fridge from './components/Fridge';
// import LoginModal from './components/LoginModal' 
// import PrivateRoute from './components/PrivateRoute' Still working on this

function App() {
  return (
    <div className="App">
      {/* <Fridge />
      <Login /> */}
      <BrowserRouter>
        <NavbarFixed/>
        <Route exact path="/" component={FullPageIntroWithFixedNavbar} />
        <Route path="/dashboard" component={Dashboard} />
        <Route
          exact path="/SearchForm"
          component={SearchForm} />
        <Route
          path="/addItems"
          component={AddItems} />
        <Route
          path="/AboutUs"
          component={AboutUs} />
        <Route
          path="/MyFridge"
          component={Fridge} />
        <MyFoodItem />
        <GroceryItem />
        <GroceryItemInfo />
        <GroceryItemResults />
      </BrowserRouter>
    </div>
  );
}

export default App;
