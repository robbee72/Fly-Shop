import React from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () => (
  <div className="box-layout">
    <div className="box-layout__box">
      <NavLink className="header__title" to="/" />
      <h1 className="box-layout__title">Fish On.</h1>
      <p>Roaring Fork Valley fly fishing since 1988.</p>
    </div>
  </div>
);

export default LandingPage;
