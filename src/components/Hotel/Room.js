import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

class Room extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="box-lo__room">
        <div className="box-lo__box2">
          <div className="content-container">
            <NavLink className="footer__title" to="/" />
            <h2 className="box-lo__title"> Hotel Rooms </h2>
            <h4 className="box-lo__subtitle">
              <SearchBar onSubmit={this.onSearchSubmit} />
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Room;
