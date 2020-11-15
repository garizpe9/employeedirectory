import React from "react";
import Button from "./Button";
function Tablehead() {
  return (
    <thead>
    <tr>
      <th></th>
      <th>First Name</th> <Button></Button>
      <th>Last Name</th>
      <th>Phone Number</th>
      <th>E-mail</th>
      <th>Location</th>
    </tr>
  </thead>      
  );
}

export default Tablehead;
