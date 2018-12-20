import React, { Component } from "react";
import Addresses from "../Address/Addresses.js";

class Rooms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["Rooms"]
    };
  }

  onUpdateItem = i => {
    this.setState(state => {
      const list = state.list.map((item, j) => {
        if (j === i) {
          return item + 1;
        } else {
          return item;
        }
      });

      return {
        list
      };
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={item}>
              <button type="button" onClick={() => this.onUpdateItem(index)}>
                Add
              </button>
              {item}
            </li>
          ))}
          <Addresses />
        </ul>
      </div>
    );
  }
}

export default Rooms;
