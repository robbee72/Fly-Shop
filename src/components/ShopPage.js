import React from 'react';
import { NavLink } from 'react-router-dom';

const ShopPage = () => (
  <div className="box-lo__shop">
    <div className="box-lo__box">
      <div className="content-container">
        <NavLink className="header__title" to="/" />
        <h1 className="box-lo__title">The Fly Shop</h1>
        <p className="box-lo__title">The Art of Fly Fishing</p>
      </div>
      <NavLink
        className="header__title"
        to="/shopapp"
        activeClassName="is-active"
      >
        The Shop
      </NavLink>
    </div>
  </div>
);
export default ShopPage;
