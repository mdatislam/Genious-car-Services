import React, { useEffect, useState } from "react";

import Exparts from "../Exparts/Exparts";

import Service from "./Service/Service";
import "./Services.css";

// import repaire1 from '../../../images/Repaire1.png'

const Services = () => {
  /*  const services=[
        {id:1, name:'oil change', price: 200, img:repaire1}
    ] */
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="">
      <h2 className="text-center text-primary m-2">
        Total services: {services.length}
      </h2>
      <div className="services-container container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <Exparts></Exparts>
    </div>
  );
};

export default Services;