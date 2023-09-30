import React from "react";
import { span } from "react-router-dom";
import footer from "../images/footer.png";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="p-10 mt-5 foot " style={{ background: `url('footer')` }}>
      <div className="footer d-flex slign-item-center justify-content-center ">
        <div>
          <div>
            <span className="footer-title">Services</span>
            <span className="span span-hover">Branding</span>
            <span className="span span-hover">Design</span>
            <span className="span span-hover">Marketing</span>
            <span className="span span-hover">Advertisement</span>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <span className="span span-hover">About us</span>
            <span className="span span-hover">Contact</span>
            <span className="span span-hover">Jobs</span>
            <span className="span span-hover">Press kit</span>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <span className="span span-hover">Terms of use</span>
            <span className="span span-hover">Privacy policy</span>
            <span className="span span-hover">Cookie policy</span>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <p>Copyright © 2023 - All right reserved by Wahab</p>
      </div>
    </footer>
  );
}
