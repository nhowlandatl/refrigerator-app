import React, { Component } from 'react'
import { axios } from "axios";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
        console.log(event.target.value)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        // axios.post('/', {
        //     email: this.state.email

        // })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="email" name="email" value={this.state.email} required onChange={this.handleChange}/>
                <input type="password" name="password" value={this.state.password} required onChange={this.handleChange}/>
                <button type="submit">Submit</button>

            </form>
        )
    }
}

export default Login
