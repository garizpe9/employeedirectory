import React, { Component } from "react";
import "./style.css";
class Form extends Component {
  state = {
    firstName: "",
   
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.firstName) { 
      alert("Fill out name please!");
    } 
    this.setState({
      firstName: "",
    });
  };

  render() {
    return (
      <header className="footer">
        <p>
          Looking for {this.state.firstName}...
        </p>
   
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Employee Name"
          /> 
          <button onClick={this.handleFormSubmit}>Submit</button>       
      </header>
      
    );
  }
}

export default Form;
