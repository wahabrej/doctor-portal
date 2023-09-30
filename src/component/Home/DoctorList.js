import React from "react";
import Whity from "../images/whitening.png";
import "./InfoCard.css";
import Doctor1 from "../images/doctor.png";
import Doctor from "./Doctor";
const doctor = [
  {
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, officiis",
    name: "A .Wahab",
    city: "Dhaka",
    img: Doctor1,
  },
  {
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, officiis",
    name: "Mis Fatima",
    city: "Rajshahi",
    img: Doctor1,
  },
  {
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, officiis",
    name: " Mis Jannat",
    city: "Rangpur",
    img: Doctor1,
  },
];
export default function DoctorList() {
  return (
    <div className="mt-5">
      <div className="d-flex align-items-center justify-content-center ">
        <h5 style={{ color: "#2dc4bf" }}>OUR DOCTOR LIST</h5>
      </div>
      <div className="d-flex align-items-center justify-content-center ">
        <hr style={{ color: "black", height: "3px", width: "75%" }}></hr>
      </div>

      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="row w-75 ">
          {doctor.map((doctor) => (
            <Doctor doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
}
