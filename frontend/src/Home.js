import React, { useEffect, useState } from "react"
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Home() {

    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/student')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[])
    const navigate = useNavigate();
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/student/delete/${id}`) // `` We use this quote when we pass a variable into a string.
        .then(res => window.location.reload())
        .catch(err => console.log(err));
    }
    return(
        <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
            <div className="bg-white rounded w-50 p-3">
            <Link to="/" className="btn btn-primary">
          Log Out
        </Link>
                <h2 className=" bg-light">Student Informations</h2>
                
                <Link to="/create" className="btn btn-success">Add +</Link>
               
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Course</th>
                            <th>Grade</th>
                            <th>Action</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {data.map( (d ,i) => (

                            <tr key={d.id}> 
                                <td>{d.name}</td>
                                <td>{d.phone}</td>
                                <td>{d.email}</td>
                                <td>{d.course}</td>
                                <td>{d.grade}</td>

                                <td>
                                <Link to={`/update/${(d.id)}`} className="btn btn-sm btn-primary">Update</Link>
                                <button onClick={e => handleDelete(d.id)} className="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    
                </table>

            </div>

        </div>
    )
}

export default Home