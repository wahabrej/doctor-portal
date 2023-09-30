import React from "react";
import Header from "./Header";
import Services from "./Services";
import Exception from "./Exception";
import SingleDoctorAppintment from "./SingleDoctorAppintment";
import PatientOp from "./PatientOp";
import DoctorList from "./DoctorList";
import Footer from "./Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <Services />
      <Exception />
      <SingleDoctorAppintment />
      <PatientOp />
      <DoctorList />
      <Footer />
    </div>
  );
}
