import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.employee.map(result => (
        <li className="list-group-item" key={result.cell}>
          {/* <img alt={result.title} className="img-fluid" src={result.images.original.url} /> */}
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
