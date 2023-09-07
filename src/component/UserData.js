import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";


export default function StudentData() {
  const [studentData, setStudentData] = useState({
    name: "",
    age: "",
    class: "",
  });

const handleInputChange = (e) => {
    const {name, value} = e.target;
    setStudentData({
        ...studentData,
        [name]: value,
    });
}

const handleSubmit = (e) => {
    console.log(studentData);
}


  return (
    <div>
      <h1>Student Data</h1>
      <form>
        <p>
          Student Name:
          <input
            type="text"
            name="name"
            value={studentData.name}
            onChange={handleInputChange}
          />
        </p>
        <p>
          Student Age:
          <input
            type="text"
            name="age"
            value={studentData.age}
            onChange={handleInputChange}
          />
        </p>
        <p>
          Student Class:
          <input
            type="text"
            name="class"
            value={studentData.class}
            onChange={handleInputChange}
          />
        </p>
        <button type="submit"  onSubmit={handleSubmit}>Add Student</button>
      </form>

      <table>
        <thead>
          <tr>
            <th colSpan={'5'}>Name</th>
            <th colSpan={'5'}>Age</th>
            <th colSpan={'5'}>Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={'5'}>{studentData.name}</td>
            <td colSpan={'5'}>{studentData.age}</td>
            <td colSpan={'5'}>{studentData.class}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
