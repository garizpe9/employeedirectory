import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    employee: [],
    employeeName: [],
  };

  componentDidMount() {
    this.searchGiphy();
    
  }
  //Grabs API Results
  searchGiphy = query => {
    API.search(query)
      .then(res => this.setState({ employee: res.data.results, employeeName: res.data.results}))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    const results = this.state.employee.filter(person => {
      var objectone = person.name.first.toLowerCase();
      var objecttwo = person.name.last.toLowerCase();
      var merged = objectone.concat(objecttwo)
      return (merged.indexOf(value.toLowerCase()) !== -1)})
    this.setState({employeeName: results})
    console.log (results)
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        
         <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>E-mail</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
        <ResultList employee={this.state.employeeName} />
        {/* need to somehow filter and sort  - can use npm or .filter /sort*/}
        </tbody>
      </div>
    );
  }
}

export default SearchResultContainer;


//create another component - button somewhere 
//button call a function 
// .sort << write a compare function ; if it's ascending or descending