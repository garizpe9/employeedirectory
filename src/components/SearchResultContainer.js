import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
// import Tablehead from "./Tablehead";

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

  onClicks = event => {event.preventDefault();
    //var listing = this.state.employeeName;
    // var alpha = this.state.employeeName//listing.slice(0);
    // alpha.sort =(a,b) => {
    //   var x = a.listing.toLowerCase();
    //   var y = b.listing.toLowerCase();
    //   return x < y ? -1 : x > y ? 1 : 0;
    // }

    var byName = this.state.employeeName.slice(0);
byName.sort(function(a,b) {
    var x = a.name.first.toLowerCase();
    var y = b.name.first.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
});

console.log('by name:');
console.log(byName);
   }

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        
         <thead>
          <tr>
            <th></th>
            <th>First Name</th><button onClick={this.onClicks}>BUTTON</button>
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

//8 components
//wrapper - not a lot going on
    //header - just a header class 
      //main - body of  actual app - 
          //data area [ more structured/ set of code  state being defined  will have the ability to sort]
      //nav
      
      //data table
      //searchbox
        //data body


//wrapper