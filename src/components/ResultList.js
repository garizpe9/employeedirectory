import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.employee.map(result => (
        <li className="list-group-item" key={result.login.uuid}>
          {<h1>{result.name.first} {result.name.last}</h1>}
          {<img alt={result.login.uuid} className="img-fluid" src={result.picture.large} />}<br></br>
          {result.cell} <br></br>
          {result.email} <br></br>
          {result.location.city}, {result.location.state}
          
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
