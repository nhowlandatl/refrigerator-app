import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export class Item extends Component {
    constructor(props){
        super(props)
        this.state={
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
            <div className="categoryItems">
                <div className="individualItems">
                    <img src={this.state.items[0].image} alt="food"/>
                    <br/>
                    <span id="itemName">{this.state.items[0].itemName}</span>
                    <br/>
                    <span id="expDateSoon">Exp: {this.state.items[0].expDate}</span>
                    <br/>
                    <Button variant="contained" color="primary">Remove</Button>
                </div>
                <div className="individualItems">
                    <img src={this.state.items[1].image} alt="food"/>
                    <br/>
                    <span id="itemName">{this.state.items[1].itemName}</span>
                    <br/>
                    <span id="expDateSoon">Exp: {this.state.items[1].expDate}</span>
                    <br/>
                    <Button variant="contained" color="primary">Remove</Button>
                </div>
            </div>
        )
    }
}

export default Item
