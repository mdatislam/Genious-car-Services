import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import useSingleDetailService from '../Hook/SingleDetailService/useSingleDetailService';

const ServiceDetail = () => {
    const {ServiceID}=useParams()
    const [service,setService]= useSingleDetailService(ServiceID)
   
    return (
        <div className='py-4 text-center'>
           <h3> Service Detail No: {service.name}</h3>
          <img src={service.img} alt="" /> <br/> <br/>
           <Link to={`/CheckOut/${ServiceID}`}><button className='btn btn-info'> Proceed Checkout</button></Link>
        </div>
    );
};

export default ServiceDetail;