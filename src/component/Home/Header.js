import React from "react";
import Navber from "./Navber";
import Mainheader from "./Mainheader";
import "./Header.css";
import BusinessInfo from "./BusinessInfo";
export default function Header() {
  return (
    <div className="header_container">
      <Navber />
      <Mainheader />
      <BusinessInfo />
    </div>
  );
}
