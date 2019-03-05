import React, { Component } from 'react';
import Moment from 'react-moment';

class Clock extends Component {
  render() {
    return (
      <div className="footer__date">
        <Moment format=" MMMM DD YYYY h:mm:ss a">
          {this.props.dateToFormat}
        </Moment>
      </div>
    );
  }
}

export default Clock;
