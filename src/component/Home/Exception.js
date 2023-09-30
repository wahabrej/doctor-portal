import React from "react";
import Treatment from "../images/treatment.png";
export default function Exception() {
  return (
    <div style={{ height: "600px" }}>
      <div className="d-flex align-items-center justify-content-center">
        <div className="col-md-4 offset-md-1 mt-5">
          <img
            src={Treatment}
            className="img-fluid"
            style={{ height: "400px" }}
            alt=""
          />
        </div>
        <div
          className="col-md-4 "
          style={{ float: "left", textAlign: "start", alignItems: "center" }}
        >
          <h2>
            Exceptional Dental Care,<br></br>On Your Terms
          </h2>
          <p className="text-secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            laudantium asperiores consequatur. Quos sapiente minima dolore
            magnam incidunt at omnis? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Vitae, quasi Lorem ipsum dolor sit amet
            consectetur adipisicing elit. A odit aut sunt fugiat saepe nisi
            placeat minus, non animi blanditiis, odio, laboriosam est
            necessitatibus tenetur! Culpa aspernatur sint molestias deleniti?
          </p>
          <button className="btn btn-secondary">Learn More...</button>
        </div>
      </div>
    </div>
  );
}
