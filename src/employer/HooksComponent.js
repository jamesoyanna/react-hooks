import React, { useState } from "react";

export default function EmployeeDetails() {
  const [name, setName] = useState("Mayank");
  const [age, setAge] = useState(31);
  const [designation] = useState("Senior Developer");

  function updateEmployeeAge() {
    setAge(age + 1);
  }

  function updateName(){
      setName("James Oyanna")
  }

  return (
    <div>
      <p>Employee Name: {name}</p>
      <p>Employee Age: {age}</p>
      <p>Employee Designation: {designation}</p>
      <input
        type="button"
        onClick={updateEmployeeAge}
        value="Click To Update Age"
      />

      <button type="button" onClick={updateName}>Change Name</button>
    </div>
  );
}
