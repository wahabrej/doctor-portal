import React from "react";
import Whity from "../images/whitening.png";
import "./InfoCard.css";
import People1 from "../images/people1.png";
import People3 from "../images/people3.png";
import People2 from "../images/people2.png";
import Patient from "./Patient";
const patient = [
  {
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, officiis",
    name: "A .Wahab",
    city: "Dhaka",
    img: People1,
  },
  {
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, officiis",
    name: "Mis Fatima",
    city: "Rajshahi",
    img: People2,
  },
  {
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, officiis",
    name: " Mis Jannat",
    city: "Rangpur",
    img: People3,
  },
];
export default function PatientOp() {
  return (
    <div className="mt-5">
      <div className="d-flex text-align-start w-75 mt-5">
        <div className="col-md-6 offset-md-1">
          <h5>TESTMONIAL</h5>

          <h2>
            What's Our Patients <br></br> Sayes
          </h2>
        </div>
        <div className="col-md-6 offset-md-1">
          <img src={Whity} alt="" />
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="row w-75 ">
          {patient.map((patient) => (
            <Patient patient={patient} />
          ))}
        </div>
      </div>
    </div>
  );
}
