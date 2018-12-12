import React from "react";
import { NavLink } from "react-router-dom";

const DiningPage = () => (
  <div className="box-layout__frame">
    <div className="box-layout__box">
      <div className="content-container">
        <NavLink className="header__title" to="/" />
        <h1 className="box-layout__title">le Cafe des Grille</h1>
        <p>Chef Barasso from breakfast to Last night dining.</p>
      </div>
    </div>
  </div>
);

export default DiningPage;