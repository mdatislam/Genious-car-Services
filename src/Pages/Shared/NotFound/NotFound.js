import React from 'react';
import slipy from '../../../images/Slipy.png'

const NotFound = () => {
    return (
        <div className='text-center py-4'>
            <h2>Mechanics Now Slipping...</h2>
            <img className='w-75 ' src={slipy} alt="" />
        </div>
    );
};

export default NotFound;