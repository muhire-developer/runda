import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Studentcreate() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    function handleSubmit(event) {
      event.preventDefault();
      axios.post('http://localhost:8081/create',{name, password})
      .then((res) => {
        console.log(res);
        navigate('/');
      }).catch(err => console.log(err));
      
      
    }
  return (
    <div className='d-flex  bg-primary justify-content-center align-items-center vh-100'>
        <div className='w-50 p-5 border rounded'>
            <h1 className='text-center'>Create Student</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='name' onChange={e => setName(e.target.value)} className='form-control mb-3' />
                <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)} className='form-control mb-3' />
                <button className='btn btn-success'>submit</button>
            </form>
    </div>
    </div>
  )
}
