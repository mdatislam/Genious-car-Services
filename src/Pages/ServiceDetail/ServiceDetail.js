import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    const {ServiceID}=useParams()
    return (
        <div className='py-4 text-center'>
           <h3> Service Detail No: {ServiceID}</h3>
           <Link to='/CheckOut'><button className='btn btn-info'> Proceed Checkout</button></Link>
        </div>
    );
};

export default ServiceDetail;