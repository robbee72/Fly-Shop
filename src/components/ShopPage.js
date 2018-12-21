import React from "react";
import { NavLink } from "react-router-dom";

const ShopPage = () => (
  <div className="box-lo__shop">
    <div className="content__content">
      <NavLink className="header__title" to="/" />

      <div className="card">
        <div className="card__content">
          <div className="card__front">
            <h3 className="card__title">The Fly Shop</h3>
            <p className="card__subtitle">The Art of Fly Fishing</p>
          </div>

          <div className="card__back">
            <p className="card__body">
              “You did not kill the fish only to keep alive and to sell for
              food, he thought. You killed for pride and because you are a
              fisherman. You loved him when he was alive and you loved him
              after. If you love him, it is not a sin to kill him. Or is it
              more?” -- Ernest Hemingway
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default ShopPage;
