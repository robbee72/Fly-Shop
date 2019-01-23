import React from "react";
import { NavLink, Link } from "react-router-dom";

const DiningPage = () => (
  <div className="box-lo__frame">
    <div className="box-lo__box">
      <div className="content-container">
        <NavLink className="header__title" to="/" />
        <h1 className="box-lo__title">le Cafe des Grille</h1>
        <p>Chef Barasso from breakfast to Last night dining.</p>
      </div>
      <Link to="/menu">
        <h3>Menus </h3>
      </Link>
    </div>
  </div>
);

export default DiningPage;
