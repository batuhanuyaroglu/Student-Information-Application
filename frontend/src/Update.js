import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const navigate = useNavigate();
  const [grade, setGrade] = useState(0);
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/student/" + id)
      .then((res) => {
        setName(res.data.name);
        setPhone(res.data.phone);
        setEmail(res.data.email);
        setCourse(res.data.course);
        setGrade(res.data.grade);
      })
      .catch((err) => console.log(err));
  }, []); 
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put("http://localhost:5000/student/update/" + id, {
        name,
        phone,
        email,
        course,
        grade,
      })
      .then((res) => {
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Update User</h2>
          <div className="mb-3">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="form control"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Phone</label>
            <input
              type="text"
              placeholder="Enter Your Phone"
              className="form control"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Course</label>
            <input
              type="text"
              placeholder="Enter Your Course"
              className="form control"
              onChange={(e) => setCourse(e.target.value)}
              value={course}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Grade</label>
            <input
              type="number"
              placeholder="Enter Your Grade"
              className="form control"
              onChange={(e) => setGrade(parseInt(e.target.value))}
              value={grade}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
