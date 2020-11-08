import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import worker from "../utils/API";
import Form from "./components/Form";
//import API from "../utils/API";
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    worker
  };


  render() {
    return (
      <div className="container">
        
          <Title>Employee Directory</Title>
          <Form></Form>
          <Wrapper>
          {this.state.worker.map(employee => (
            <EmployeeCard
              id={employee.id}
              key={employee.id}
              name={employee.name}
              image={employee.image}
              occupation={employee.occupation}
              location={employee.location}
            />
          ))}
          
          </Wrapper>
        </div>  
    );
  }
}

export default App;
