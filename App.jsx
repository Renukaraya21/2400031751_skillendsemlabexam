import React from "react";
import "./App.css";

function App() {
  const student = {
    name: "renuka",
    roll: "24BDCS018",
    dept: "Computer Science Engineering",
    image: "/profile.jpg"  // place image in public folder
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        textAlign: "center",
        fontFamily: "Arial"
      }}
    >
      <h2>Student Details</h2>

      <img
        src={student.image}
        alt="Profile"
        width="150"
        height="150"
        style={{ borderRadius: "50%", marginBottom: "15px" }}
      />

      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Roll Number:</strong> {student.roll}</p>
      <p><strong>Department:</strong> {student.dept}</p>
    </div>
  );
}

export default App;
