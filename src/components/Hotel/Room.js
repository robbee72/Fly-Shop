import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

class Room extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="box-layout__room">
        <div className="box-layout__box2">
          <div className="content-container">
            <NavLink className="footer__title" to="/" />
            <h2 className="box-layout__title"> Hotel Rooms </h2>
            <h4 className="box-layout__subtitle">
              <SearchBar onSubmit={this.onSearchSubmit} />
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Room;
