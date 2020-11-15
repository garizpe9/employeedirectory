import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import Wrapper from "./Wrapper";
import "./style.css";
import { Table, Button } from 'reactstrap';
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
    
  };

  firstName = event => {event.preventDefault();
    var byName = this.state.employeeName.slice(0);
    byName.sort(function(a,b) {
    var x = a.name.first.toLowerCase();
    var y = b.name.first.toLowerCase();
    return (x < y ? -1 : x > y ? 1 : 0);
    });
  this.setState({employeeName: byName})
    };

  lastName = event => {event.preventDefault();
    var byName = this.state.employeeName.slice(0);
    byName.sort(function(a,b) {
    var x = a.name.last.toLowerCase();
    var y = b.name.last.toLowerCase();
    return (x < y ? -1 : x > y ? 1 : 0);
    });
  this.setState({employeeName: byName})
    };


  render() {
    return (
        <Wrapper>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <Table>
         <thead>
          <tr>
            <th></th>
            <th>First Name <Button onClick={this.firstName}>Sort</Button></th>
            <th>Last Name <Button onClick={this.lastName}>Sort</Button></th>
            <th>Phone Number</th>
            <th>E-mail</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody> 
        <ResultList employee={this.state.employeeName} />
        </tbody>
        </Table>
        </Wrapper>
    )
  }
}
export default SearchResultContainer;