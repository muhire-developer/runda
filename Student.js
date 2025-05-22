import React from 'react'
import axios from 'axios';
import react, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Student() {
    const [student, setStudent] = useState([])
    useEffect(() => {
axios.get('http://localhost:8081')
.then((res) => setStudent(res.data))
.catch((err) => console.log(err));
    }, []);
    const handleDelete = async (id) => {
try {
    await axios.delete('http://localhost:8081/food/' + id)
    window.location.reload();
    }catch (err) {
        console.log(err);
    }}
  return (
    <div className='d-flex  bg-primary justify-content-center align-items-center vh-100'>
        <div className='w-50 p-5 border rounded'>
<Link to="/create" className='btn btn-success'>Add +</Link>
<table className='table table-striped table-hover'>

    <thead>
     <tr>
        <th>id</th>
        <th>name</th>
        <th>password</th>
        <th>action</th>
     </tr>
    </thead>
    <tbody>{
    student.map((data, i) => (
        <tr key={i}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.password}</td>
            <td>
                <Link to={`update/${data.id}`} className='btn btn-warning '>update</Link>
                <button className='btn btn-danger m-2' onClick={e => handleDelete(data.id)}>delete</button>
            </td>
        </tr>
    ))
}
    </tbody>
    </table>
    </div>
    </div>
  )
}
