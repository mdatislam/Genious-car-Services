import React from "react";
import Expart1 from "../../../images/experts/expert-1.jpg";
import Expart2 from "../../../images/experts/expert-2.jpg";
import Expart3 from "../../../images/experts/expert-3.jpg";
import Expart4 from "../../../images/experts/expert-4.jpg";
import Expart5 from "../../../images/experts/expert-5.jpg";
import Expart6 from "../../../images/experts/expert-6.png";
import Expart from "../Expart/Expart";



const Exparts = () => {
  const Exparts = [
    { id: 1, name: "Rasel", img: Expart1 },
    { id: 2, name: "Hasu", img: Expart2 },
    { id: 3, name: "Enaet", img: Expart3 },
    { id: 4, name: "Semuel", img: Expart4 },
    { id: 5, name: "Zakir", img: Expart5 },
    { id: 6, name: "Moyna", img: Expart6 },
  ];
  return (
    <div className="container">
      <h2 className="text-info text-center m-4">Our Exparts</h2>
      <div className="row gx-3">
          
          {
            Exparts.map(expart => 
              <Expart key={expart.id} expart={expart}></Expart>
            )
            }
          
      </div>
    </div>
  );
};

export default Exparts;
