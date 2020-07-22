import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FullPageIntroWithFixedNavbar from "./components/FullPageIntroWithFixedNavbar";
import NavbarFixed from "./components/NavbarFixed";
import SearchForm from "./components/SearchForm";
import GroceryItemResults from "./components/GroceryItemResults";
import AboutUs from "./components/AboutUs";
import Fridge from "./components/Fridge";
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarFixed />
        <Route exact path="/" component={FullPageIntroWithFixedNavbar} />
        <PrivateRoute 
          path="/SearchForm" 
          component={SearchForm} 
          exact={true}
        />
        <Route path="/AboutUs" component={AboutUs} />
        <PrivateRoute 
          path="/MyFridge" 
          component={Fridge} 
          exact={true}
        />
        <GroceryItemResults />
      </BrowserRouter>
    </div>
  );
}

export default App;
