import React from "react";
import Chair from "../images/chair.png";
import Clock from "../icons/clock.svg";
import {
  faMapMarker,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import InfoCard from "./InfoCard";

const info = [
  {
    title: "Opening Houre",
    description: "we are open 7 houre",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit Our Location",
    description: "Badda Dhaka , 1006 Bangladesh",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Call us now",
    description: "+08801788429334",
    icon: faPhone,
    background: "primary",
  },
];
export default function BusinessInfo() {
  return (
    <section className="d-flex justify-content-center align-items-center">
      <div className=" row w-75">
        {info.map((info) => (
          <InfoCard info={info} />
        ))}
      </div>
    </section>
  );
}
