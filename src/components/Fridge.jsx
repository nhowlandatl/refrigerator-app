import React, { Component } from 'react'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Item from './Item';
// import Typography from '@material-ui/core/Typography';

export class Fridge extends Component {
    constructor(props) {
        super(props);
        
		this.state = {
            items: {
                0: {
                    image: "https://baconmockup.com/160/160/",
                    itemName: "Bacon",
                    expDate: "07/15/2020",
                    category: "Meat"
                },
                1: {
                    image: "https://bit.ly/2OcQppf",
                    itemName: "Milk",
                    expDate: "07/15/2020",
                    category: "Dairy"
                },
                2: {
                    image: "https://bit.ly/328GqJy",
                    itemName: "Eggs",
                    expDate: "07/15/2020",
                    category: "Meat"
                },
                3: {
                    image: "https://bit.ly/2BTYQDo",
                    itemName: "Apples",
                    expDate: "07/20/2020",
                    category: "Produce"
                },
                4: {
                    image: "https://bit.ly/324o2BH",
                    itemName: "Orange Juice",
                    expDate: "07/15/2020",
                    category: "Produce"
                },
                5: {
                    image: "https://bit.ly/2CmZE3x",
                    itemName: "Lettuce",
                    expDate: "07/25/2020",
                    category: "Produce"
                },
                6: {
                    image: "https://bit.ly/3iSYIVm",
                    itemName: "Cheese",
                    expDate: "08/02/2020",
                    category: "Dairy"
                }
            }
        }
	}
    render() {
        return (
            <div className="container">
                <div id="sideBar">
                    <h1 id="appName">FridgeBuddy</h1>
                    <List>
                        <a href="..."><ListItem><Button variant="contained" color="primary">Add More Items</Button></ListItem></a>
                        <a href="..."><ListItem>Fridge</ListItem></a>
                        <a href="..."><ListItem>Freezer</ListItem></a>
                        <a href="..."><ListItem>Pantry</ListItem></a>
                        {/* <a href="..."><li>Get Recipes</li></a> */}
                    </List>
                </div>
                <div id="fridgeContainer">
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
                        <h3 className="itemHeader" style={{color: "red"}}>Expiring Soon:</h3>
                    <div id="expiringSoon">
                        <Item />
                        {/* <div className="individualItems">
                            <img src="https://baconmockup.com/160/160/" alt="food"/>
                            <span id="itemName">Bacon</span>
                            <span id="expDateSoon">Exp: July 11</span>
                            <Button variant="contained" color="primary">Remove</Button>
                        </div> */}
                        {/* <div className="individualItems">
                            <img src="https://bit.ly/2OcQppf" alt="milk" />
                            <span id="itemName">Milk</span>
                            <span id="expDateSoon">Exp: July 12</span>
                            <Button variant="contained" color="primary">Remove</Button>
                        </div> */}
                        {/* <div className="individualItems">
                            <img src="https://bit.ly/328GqJy" alt="food" style={{height: "160px", width: "160px"}}/>
                            <span id="itemName">Eggs</span>
                            <span id="expDateSoon">Exp: July 13</span>
                            <Button variant="contained" color="primary">Remove</Button>
                        </div> */}
                        {/* <div className="individualItems">
                            <img src="https://bit.ly/2BTYQDo" alt="food" style={{height: "160px", width: "160px"}}/>
                            <span id="itemName">Apples</span>
                            <span id="expDateSoon">Exp: July 11</span>
                            <Button variant="contained" color="primary">Remove</Button>
                        </div> */}
                        {/* <div className="individualItems">
                            <img src="https://bit.ly/324o2BH" alt="food" style={{height: "160px", width: "160px"}}/>
                            <span id="itemName">Orange Juice</span>
                            <span id="expDateSoon">Exp: July 11</span>
                            <Button variant="contained" color="primary">Remove</Button>
                        </div> */}
                    </div>
                        <h3 className="itemHeader">Produce:</h3>
                    <div className="categoryItems">
                        {/* <div className="individualItems">
                            <img src="https://bit.ly/2BTYQDo" alt="food" style={{height: "160px", width: "160px"}}/>
                            <span id="itemName">Apples</span>
                            <span id="expDate">Exp: July 20</span>
                            <Button variant="contained" color="primary">Remove</Button>
                        </div> */}
                        {/* <div className="individualItems">
                            <img src="https://bit.ly/2CmZE3x" alt="food" style={{height: "160px", width: "160px"}}/>
                            <span id="itemName">Lettuce</span>
                            <span id="expDate">Exp: July 21</span>
                            <Button variant="contained" color="primary">Remove</Button>
                        </div> */}
                    </div>
                            <h3 className="itemHeader">Dairy:</h3>
                        <div className="categoryItems">
                            {/* <div className="individualItems">
                                <img src="https://bit.ly/3iSYIVm" alt="food" style={{height: "160px", width: "160px"}}/>
                                <span id="itemName">Cheese</span>
                                <span id="expDate">Exp: July 21</span>
                                <Button variant="contained" color="primary">Remove</Button>
                            </div> */}
                        </div>
                </div>
            </div>
        )
    }
}

export default Fridge
