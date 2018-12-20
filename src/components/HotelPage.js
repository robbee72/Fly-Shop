import React from "react";
import { NavLink } from "react-router-dom";

const HotelPage = () => (
  <div className="box-layout__hotelroom">
    <div className="box-layout__box">
      <div className="content-container">
        <NavLink className="header__title" to="/" />
        <h1 className="box-layout__title">The Lodge</h1>
        <p> Modern Cottage style rooms.</p>
        <ul>
          <li>
            <NavLink
              className="header__title"
              to="/room"
              activeClassName="is-active"
            >
              <h3> Hotel Rooms</h3>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default HotelPage;
