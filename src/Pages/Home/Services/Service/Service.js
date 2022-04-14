import React from 'react';
import './Seervice.css'

const Service = ({service}) => {
    console.log(Service)
    const {name,price,img,description}=service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Price:${price}</p>
            <small>{description}</small>
            <button className='btn btn-primary ms-5'> Book: {name}</button>
        </div>
    );
};

export default Service;