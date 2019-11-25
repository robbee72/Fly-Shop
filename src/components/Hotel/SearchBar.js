import React, { Component } from 'react';
import Select from 'react-select';
import roomsSelect from './Roomdata.js';

class Rooms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ['Rooms']
    };
  }

  render() {
    return (
      <div>
        <div className="col-md-2">
          <Select options={roomsSelect} />
        </div>
      </div>
    );
  }
}

export default Rooms;
