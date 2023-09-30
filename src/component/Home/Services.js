import React from "react";
import Cavity from "../images/cavity.png";
import Fluoride from "../images/fluoride.png";
import Whitey from "../images/whitening.png";
import ServiceCard from "./ServiceCard";
const data = [
  {
    name: "Fluoride Treatment",
    img: Fluoride,
    desc: "We provide this kind of services..alsowe provide online service treatment",
  },
  {
    name: "Cavity Filling",
    img: Cavity,
    desc: "We provide this kind of services..alsowe provide online service treatment",
  },
  {
    name: "Teeth Whiting",
    img: Whitey,
    desc: "We provide this kind of services..alsowe provide online service treatment",
  },
];
export default function Services() {
  return (
    <section className="mt-5">
      <div>
        <h5 style={{ color: "#2dc4bf" }}>OUR SERVICES</h5>

        <h2>Service we provide</h2>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className=" w-75 row">
          {data.map((data) => (
            <ServiceCard data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}
