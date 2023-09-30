import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InfoCard.css";

export default function Doctor({ doctor }) {
  return (
    <div className="col-md-4 text-dark d-flex mt-5 ml-4">
      <div
        style={{
          border: "1px solid black",
          borderRadius: "30px",
          padding: "5px",
        }}
      >
        <div>
          <p className="text-secondary">{doctor.desc}</p>
        </div>
        <div>
          <img
            style={{ borderRadius: "50%", height: "100px" }}
            src={doctor.img}
            alt=""
          />
        </div>
        <div>
          <h6>{doctor.name}</h6>
          <p>{doctor.city}</p>
        </div>
      </div>
    </div>
  );
}
