import React, { Component } from 'react'

export default class EmployeeDetails extends Component {
    constructor(){
        super();
        this.state = {
            name: "James Oyanna",
            age: 29,
            designation: "Senior Developer"
        }
    }

    updateEmployeeAge= ()=>{
        this.setState({
            age: this.state.age +1
        });
    }

    render() {
        return (
            <div>
              <p>Employee Name: {this.state.name}</p>
              <p>Employee age: {this.state.age}</p>
              <input type="button" onClick = {this.updateEmployeeAge} value="Click To Update Age" />
            </div>
        )
    }
}
