import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Seervice.css'

const Service = ({service}) => {
    console.log(Service)
    const {id,name,price,img,description}=service;
    const navigate= useNavigate();
    const navigateToDetail=id=>{
        navigate(`Services/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Price:${price}</p>
            <small>{description}</small>
            <button onClick={()=> {navigateToDetail(id)}} className='btn btn-primary ms-5'> Book: {name}</button>
        </div>
    );
};

export default Service;