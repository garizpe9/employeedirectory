import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.picture.thumbnail} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name.first} {props.name.last}
          </li>
          <li>
            <strong>Occupation:</strong> {props.email}
          </li>
          <li>
            <strong>Location:</strong> {props.location.city}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
