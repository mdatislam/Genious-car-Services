import React from "react";
import { useParams } from "react-router-dom";
import useLoadService from "./../Hook/Hook";

const ManageService = () => {
  const [service, setService] = useLoadService();
  const handleToDelete = (id) => {
    const proceed = window.confirm();
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining= service.filter(rem => rem._id !== id)
          setService(remaining)
        });
    }
  };
  return (
    <div>
      {service.map((job) => (
        <div>
          {job.name} <button onClick={() => handleToDelete(job._id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default ManageService;
