import React from "react";
import "./InfoCard.css";
export default function ServiceCard({ data }) {
  return (
    <div className="col-md-4 text-center text-balck mt-5 ">
      <div className={""}>
        <div>
          <img style={{ height: "50px" }} src={data.img} />
        </div>
        <div>
          <h6 style={{ margin: "10px" }}>{data.name}</h6>
          <p className="text-secondary">{data.desc}</p>
        </div>
      </div>
    </div>
  );
}
