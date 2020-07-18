import React, { Component } from 'react'

export class AddItems extends Component {
    constructor(props){
        super(props);
        this.state = { apiResponse: ""}
    };

    callAPI() {
        fetch("http://localhost:5001/apicall")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <p className="App-intro">;{this.state.apiResponse}</p>
            </div>
        )
    }
}

export default AddItems

