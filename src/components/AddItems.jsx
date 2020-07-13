import React, { Component } from 'react'

export class AddItems extends Component {
    render() {
        return (
            <div>
                <h1>Add Groceries</h1>
                <form>
                    <label>
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                    </form>
            </div>
        )
    }
}

export default AddItems
