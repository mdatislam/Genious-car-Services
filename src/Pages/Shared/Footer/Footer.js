import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-dark mt-4 py-2 text-white text-center fs-5'>
           <p><small>Copyright &copy;{year}</small></p>
        </div>
    );
};

export default Footer;