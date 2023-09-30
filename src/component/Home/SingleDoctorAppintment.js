import React from "react";
import Doctor from "../images/doctor.png";
import "./InfoCard.css";
export default function SingleDoctorAppintment() {
  return (
    <div className=" d-flex justify-content-center align-items-center">
      <div
        className="single-doctor d-flex justify-content-center align-items-center"
        style={{ height: "400px", marginTop: "100px" }}
      >
        <div className=" d-flex justify-content-center align-items-center row w-75 ">
          <div className="col-md-4 offset-md-1 mt-5">
            <img
              src={Doctor}
              className="img-fluid doctor-img "
              style={{ height: "400px", transform: "translateY(-130px)" }}
              alt=""
            />
          </div>
          <div
            className="col-md-4 "
            style={{ float: "left", textAlign: "start", alignItems: "center" }}
          >
            <h5 style={{ color: "#2dc4bf" }}>APPOINTMENT</h5>
            <h2 className="text-primary">
              Make an appointment <br></br>Today
            </h2>
            <p className="text-secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            </p>
            <button className="btn btn-secondary">Learn More...</button>
          </div>
        </div>
      </div>
    </div>
  );
}
