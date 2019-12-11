import React from 'react';
import { NavLink } from 'react-router-dom';
//TODO  logout redirect to landing page and login
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div>
          <h1>Auth account expired</h1>
        </div>
        <div className="content-container">
          <div className="header__content">
            <h2 className="header__title"> Aspen Fly Shop </h2>
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
