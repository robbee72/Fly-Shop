import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const LandingPage = () => (
  <div className="box-lo">
    <div className="box-lo__box">
      <NavLink className="header__title" to="/" />
      <h1 className="box-lo__title">Fish On.</h1>
      <p>Roaring Fork Valley fly fishing since 1988.</p>
    </div>
    <Footer />
  </div>
);

export default LandingPage;
