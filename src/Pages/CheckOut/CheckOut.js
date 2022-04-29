import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useSingleDetailService from '../Hook/SingleDetailService/useSingleDetailService';
import auth from "../../firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import { toast} from 'react-toastify';

const CheckOut = () => {
    const {ServiceID}=useParams()
    const [service,setService]= useSingleDetailService(ServiceID)
    const [user]= useAuthState(auth)

    // Controlled input data
    /* const [user, setUser]=useState({
        name: 'Atiqul Islam',
        email:'atiq05099@gmail.com',
        address: ' Tin matha, Rangpur sadar, Rangpur',
        Mobile: '01962400815'
    })

    const handleAddressChange= e=>{
        // console.log(e.target.value)
        const {address, ...rest}= user;
        console.log(address, rest)
        const newAddress= e.target.value;
        const newUser= {address:newAddress, ...rest};
        setUser(newUser)
    } */
     
    const handlePlaceOrder= event =>{
        event.preventDefault();
        const order = {
            name: user.displayName,
            email: user.email,
            ServiceID: ServiceID,
            address: event.target.address.value,
            Mobile: event.target.Mobile.value

        }
        axios.post('http://localhost:5000/order',order)
        .then(function (response) {
            const {data}=response
            if(data.insertedId){
                toast('Your Order update successfully')
                event.target.reset()
            }
          
          })

    }
    return (
        <div className='w-50 mx-auto mt-3'>
            <h3 > Checkout Service Name:{service.name}</h3>
         {/*    // Example of Controll input data
            <form>
                <input type='text' className='w-100  mb-2' value={user.name}  name='name' placeholder='Name' /> <br/>
                <input type='email' className='w-100  mb-2' value={user.email} name='email' placeholder='Email' /> <br/>
                <input type='text' className='w-100  mb-2' value={service.name} name='serviceName' placeholder='serviceName' /> <br/>
                <input type='text' className='w-100  mb-2' value={user.address} onChange={handleAddressChange}  name='address' placeholder='address' /> <br/>
                <input type='text' className='w-100  mb-2' value={user.Mobile}  name='Mobile' placeholder='Mobile' /> <br/>
                <input className='btn btn-primary' type='submit' value='Place order' />
            </form> */}

            <form onSubmit={handlePlaceOrder}>
                <input type='text' className='w-100  mb-2'  value={user.displayName} name='name' placeholder='Name' required readOnly disabled /> <br/>
                <input type='email' className='w-100  mb-2' value={user.email} name='email' placeholder='Email' required readOnly disabled  /> <br/>
                <input type='text' className='w-100  mb-2' value={service.name}  name='serviceName' placeholder='serviceName' required readOnly/> <br/>
                <input type='text' className='w-100  mb-2' name='address' placeholder='address' required /> <br/>
                <input type='text' className='w-100  mb-2' name='Mobile' placeholder='Mobile' required /> <br/>
                <input className='btn btn-primary' type='submit' value='Place order' />
            </form> 
           
        </div>
    );
};

export default CheckOut