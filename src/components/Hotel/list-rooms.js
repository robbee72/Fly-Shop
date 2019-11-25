import React, { Component } from 'react';
import { RoomtypeDropdown, TowerDropdown } from 'react-roomtype-tower-selector';

class Rooms extends Component {
  constructor(props) {
    super(props);

    this.getRoomtypeValue = this.getRoomtypeValue.bind(this);
    this.getTowerValue = this.getTowerValue.bind(this);

    // we really only need to stash the selected tower + roomtype in state, but I was feeling wacky
    this.state = {
      addresses: [
        {
          label: ' ',
          jsx: () => {
            return (
              <div>
                <RoomtypeDropdown
                  value={this.getRoomtypeValue(0)}
                  onChange={val => this.selectRoomtype(0, val)}
                  priorityOptions={[`"US"`]}
                />
                <hr />

                <TowerDropdown
                  roomtype={this.getRoomtypeValue(0)}
                  value={this.getTowerValue(0)}
                  onChange={val => this.selectTower(0, val)}
                />
              </div>
            );
          },
          codeVisible: false,
          code:
            '&lt;RoomtypeDropdown\n  value={roomtype}\n  onChange={selectRoomtype}\n  />\n&lt;TowerDropdown\n  roomtype={roomtype}\n  value={tower}\n  onChange={selectTower} />',
          roomtype: 'select',
          tower: ''
        }
      ]
    };
  }

  selectRoomtype(addressIndex, val) {
    const updatedValues = this.state.addresses;
    updatedValues[addressIndex].roomtype = val;
    this.setState({ addresses: updatedValues });
  }

  selectTower(addressIndex, val) {
    const updatedValues = this.state.addresses;
    updatedValues[addressIndex].tower = val;
    this.setState({ addresses: updatedValues });
  }

  getRoomtypeValue(index) {
    return this.state.addresses[index].roomtype;
  }

  getTowerValue(index) {
    return this.state.addresses[index].tower;
  }

  toggleCode(addressIndex) {
    const updatedValues = this.state.addresses;
    updatedValues[addressIndex].codeVisible = !updatedValues[addressIndex]
      .codeVisible;
    this.setState({ addresses: updatedValues });
  }

  getAddresses() {
    let i = 0;
    return this.state.addresses.map(address => {
      return (
        <section key={i}>
          {address.jsx()}
          <pre style={{ display: address.codeVisible ? 'block' : 'none' }}>
            <code
              className="html"
              dangerouslySetInnerHTML={{ __html: address.code }}
            />
          </pre>
        </section>
      );
    });
  }

  render() {
    return <div>{this.getAddresses()}</div>;
  }
}

export default Rooms;
