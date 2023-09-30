import React from "react";
import "./Header.css";
export default function Navber() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  ">
        <a
          style={{
            alignItems: "center",
            textAlign: "center",
            marginLeft: "20px",
          }}
          class="navbar-brand "
          href="#"
        >
          DocTorPoint
        </a>
        <div style={{ marginLeft: "auto" }} class="d-flex ml-auto">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="navitem" class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="navitem" class="nav-item">
                <a class="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="navitem" class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="navitem" class="nav-item">
                <a class="nav-link" href="#">
                  Review
                </a>
              </li>
              <li className="navitem" class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
