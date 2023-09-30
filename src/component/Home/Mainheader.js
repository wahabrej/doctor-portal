import React from "react";
import Chair from "../images/chair.png";

export default function Mainheader() {
  return (
    <main class="row d-flex align-items-center" style={{ height: "600px" }}>
      <div style={{ textAlign: "start" }} className="col-md-4 offset-md-1 ">
        <h1>
          Your New Smile <br></br> Starts Here
        </h1>
        <p className="text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
          dolores sunt inventore hic magni omnis quas officiis.
        </p>
        <button className="btn btn-secondary">GET APPOINTMENT</button>
      </div>
      <div className="col-md-6 offset-md-1 ">
        <img
          style={{ float: "left", marginRight: "20px" }}
          src={Chair}
          alt="images"
          className="img-fluid"
        />
      </div>
    </main>
  );
}
