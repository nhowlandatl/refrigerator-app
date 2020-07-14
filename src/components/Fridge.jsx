import React, { Component } from 'react'
//MATERIAL UI Components below
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//Import React components
import Item from './Item';

function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

export class Fridge extends Component {
    // constructor(props) {
    //     super(props);
	// }
    render() {
        return (
            <div className="container">
{/* Left menu */}
                <div id="sideBar">
                    <h1 id="appName">FridgeBuddy</h1>
                    <List>
                        <a href=""><ListItem><Button onClick={handleClick} variant="contained" color="primary">Add Items</Button></ListItem></a>
                        <a href="..."><ListItem>Fridge</ListItem></a>
                        <a href="..."><ListItem>Freezer</ListItem></a>
                        <a href="..."><ListItem>Pantry</ListItem></a>
                        {/* <a href="..."><li>Get Recipes</li></a> */}
                    </List>
                </div>
{/* Main Container */}
                <div id="fridgeContainer">
{/* Top Div with search bar and optional login info */}
                    <div id="topDiv">
                        <div id="searchBar">
                            <Input></Input>
                            <Button variant="contained" color="secondary">Search Your Fridge</Button>
                        </div>
                        <div id="userProfile">
                            <p>Jane Doe</p>
                            <Avatar></Avatar>
                        </div>
                    </div>
{/* Expiring Soon Section */}
                <h3 className="itemHeader" style={{color: "red"}}>Expiring Soon:</h3>
                    <div id="expiringSoon">
                        <Item />
                    </div>
{/* Optional Category Options */}
                <h3 className="itemHeader">Produce:</h3>
                    <div className="categoryItems">
                        <Item />
                    </div>
{/* Optional Category Options */}
                <h3 className="itemHeader">Dairy:</h3>
                        <div className="categoryItems">
                        <Item/>
                        </div>
                </div>
            </div>
        )
    }
}

export default Fridge
