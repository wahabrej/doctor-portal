import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InfoCard.css";

export default function InfoCard({ info }) {
  return (
    <div className="col-md-4 text-light ">
      <div
        className={`d-flex justify-content-center align-items-center info info-${info.background}`}
      >
        <div>
          <FontAwesomeIcon className="icon" icon={info.icon} />
        </div>
        <div>
          <h6>{info.title}</h6>
          <p>{info.description}</p>
        </div>
      </div>
    </div>
  );
}
