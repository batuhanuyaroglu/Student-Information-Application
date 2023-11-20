import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const navigate = useNavigate();
  const [grade, setGrade] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/student/create", { name, phone, email, course, grade })
      .then((res) => {
        navigate("/home");
      })
      .catch((err) => console.log(err));
      
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className="mb-3">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Phone</label>
            <input
              type="text"
              placeholder="Enter Your Phone"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Course</label>
            <input
              type="text"
              placeholder="Enter Your Course"
              className="form-control"
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Grade</label>
            <input
              type="number"
              placeholder="Enter Your Grade"
              className="form-control"
              onChange={(e) => setGrade(parseInt(e.target.value))}  // parseInt is used to convert a string to an integer.
            />
          </div>
          <button className="btn btn-success">Submit</button>
          
        </form>
      </div>
    </div>
  );
}

export default Create;
