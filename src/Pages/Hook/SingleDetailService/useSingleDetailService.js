import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useSingleDetailService =serviceID=>{
    const [service,setService]= useState({})
    useEffect(()=>{
        const url= `http://localhost:5000/service/${serviceID}`;
       fetch(url)
       .then(res=>res.json())
       .then(data=>setService(data))
    },[]);
    return [service,setService]
}
export default useSingleDetailService 