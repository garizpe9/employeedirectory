import React from "react";


function ResultList(props) {
  return(
  props.employee.map(result => (
    <tr key={result.login.uuid}>
      <td>{<img alt={result.login.uuid} className="img-fluid" src={result.picture.large}/>} </td>
      <td>{result.name.first} </td>
      <td>{result.name.last} </td>
      <td>{result.cell} </td>
      <td>{result.email} </td>
      <td> {result.location.city}, {result.location.state}</td>
    </tr>))
  ) 
 
}

export default ResultList;