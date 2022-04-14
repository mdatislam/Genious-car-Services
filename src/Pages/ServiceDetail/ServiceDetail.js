import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {ServiceID}=useParams()
    return (
        <div className='py-4'>
           <h3> Click ServiceID: {ServiceID}</h3>
        </div>
    );
};

export default ServiceDetail;