import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InfoCard.css";

export default function Patient({ patient }) {
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
          <p className="text-secondary">{patient.desc}</p>
        </div>
        <div>
          <img
            style={{ borderRadius: "50%", height: "70px" }}
            src={patient.img}
            alt=""
          />
        </div>
        <div>
          <h6>{patient.name}</h6>
          <p>{patient.city}</p>
        </div>
      </div>
    </div>
  );
}
