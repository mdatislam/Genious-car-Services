import React from "react";

const Expart = ({ expart }) => {
  const { name, img } = expart;
  return (
    <div className=" border pb-3 g-3 col-sm-12 col-md-6 col-lg-4">
        <div ClassName="card">
      <img src={img} ClassName="card-img-top" alt="..." />
      <div ClassName="card-body">
        <h5 ClassName="card-title">{name}</h5>
        <p ClassName="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="btn btn-primary">Go Some</button>
      </div>
    </div>
    </div>
  );
};

export default Expart;
