import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

class Addresses extends Component {
  constructor(props) {
    super(props);

    this.getCountryValue = this.getCountryValue.bind(this);
    this.getRegionValue = this.getRegionValue.bind(this);

    // we really only need to stash the selected region + country in state, but I was feeling wacky
    this.state = {
      addresses: [
        {
          label: " ",
          jsx: () => {
            return (
              <div>
                <CountryDropdown
                  value={this.getCountryValue(0)}
                  onChange={val => this.selectCountry(0, val)}
                  priorityOptions={[`"US"`]}
                />
                <RegionDropdown
                  country={this.getCountryValue(0)}
                  value={this.getRegionValue(0)}
                  onChange={val => this.selectRegion(0, val)}
                />
              </div>
            );
          },
          codeVisible: false,
          code:
            "&lt;CountryDropdown\n  value={country}\n  onChange={selectCountry}\n  />\n&lt;RegionDropdown\n  country={country}\n  value={region}\n  onChange={selectRegion} />",
          country: "United States",
          region: ""
        }
      ]
    };
  }

  selectCountry(addressIndex, val) {
    const updatedValues = this.state.addresses;
    updatedValues[addressIndex].country = val;
    this.setState({ addresses: updatedValues });
  }

  selectRegion(addressIndex, val) {
    const updatedValues = this.state.addresses;
    updatedValues[addressIndex].region = val;
    this.setState({ addresses: updatedValues });
  }

  getCountryValue(index) {
    return this.state.addresses[index].country;
  }

  getRegionValue(index) {
    return this.state.addresses[index].region;
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
          <pre style={{ display: address.codeVisible ? "block" : "none" }}>
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

export default Addresses;
