import React, { Component } from 'react';

function Banner(props) {
  if (!props.warn) {
    return null;
  }

  return '';
}

class BannerPage extends Component {
  constructor(props) {
    super(props);
    this.state = { showBanner: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showBanner: !state.showBanner
    }));
  }

  render() {
    return (
      <div>
        <Banner warn={this.state.showBanner} />
        <button onClick={this.handleToggleClick}>
          {this.state.showBanner ? 'Please Log In!' : 'Click to Log In'}
        </button>
      </div>
    );
  }
}

export default BannerPage;
