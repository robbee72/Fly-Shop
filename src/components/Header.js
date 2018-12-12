import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="content-container">
          <div className="header__content">
            <h1 className="header__title">Heaton Fly Shop</h1>
            <div>
              <ul>
                <li>
                  <NavLink to="/landing" activeClassName="is-active">
                    Landing
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shop" activeClassName="is-active">
                    Fly Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hotel" activeClassName="is-active">
                    Hotel
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dining" activeClassName="is-active">
                    Dining
                  </NavLink>
                </li>    
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
