import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./core/Header";
import Home from "./core/Home";
import AddCustomer from "./customers/AddCustomer";
import Customers from "./customers/Customers";
import AddProgram from "./programs/AddProgram";
import WashingPrograms from "./programs/WashingPrograms";
import AddService from "./services/AddService";
import Services from "./services/Services";

export default function Router() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/add" element={<AddCustomer />} />
          <Route path="/programs" element={<WashingPrograms />} />
          <Route path="/programs/add" element={<AddProgram />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/add" element={<AddService />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
