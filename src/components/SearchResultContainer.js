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

  // When this component mounts, search the Giphy API for pictures of kittens
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
      
      var names = person.name.first.toLowerCase()
      
      return (names.indexOf(value.toLowerCase()) !== -1)})
    this.setState({employeeName: results})
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          //handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}

        />
        <ResultList employee={this.state.employeeName} />
        {/* need to somehow filter and sort  - can use npm or .filter /sort*/}
        
      </div>
    );
  }
}

export default SearchResultContainer;
