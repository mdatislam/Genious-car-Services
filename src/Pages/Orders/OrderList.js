import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { signOut } from 'firebase/auth';
import {useNavigate } from 'react-router-dom';


const OrderList = () => {
    const [user]= useAuthState(auth)
    const [orders,setOrders]= useState([])
    const navigate = useNavigate()
    useEffect(()=>{
      /*  fetch('http://localhost:5000/OrderList')
       .then(res=>res.json())
       .then(data=> setOrders(data) */
       const getOrder= async ()=>{
           const url=`http://localhost:5000/OrderList?email=${user.email}`
          try{
            const response= await axios.get(url,{
                headers: {
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                }
 
            })
            const {data}=response;
            setOrders(data)

          }
          catch(error){
              console.log(error.message);
              if(error.response.status===401 || error.response.status ===403){
                    signOut(auth)
                    navigate('/Login')

              }

          }
       }
       getOrder()
    },[user])
    return (
        <div>
            This is yours Order List.:{orders.length}
           {
               orders.map(order=> <li>{order.name} Email:{order.email}</li>)
           }
        </div>
    );
};

export default OrderList;