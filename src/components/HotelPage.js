import React from 'react';
import { NavLink } from 'react-router-dom';

const HotelPage = () => (
  <div className="box-lo__hotelroom">
    <div className="box-lo__box">
      <div className="content-container">
        <NavLink className="header__title" to="/" />
        <h1 className="box-lo__title">The Lodge</h1>
        <p> Modern Cottage style rooms.</p>
        <ul>
          <li>
            <NavLink
              className="header__title"
              to="/room"
              activeClassName="is-active"
            >
              <div>
                <h5> Hotel Rooms</h5>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default HotelPage;
