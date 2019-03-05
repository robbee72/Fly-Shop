import React from 'react';
import { Link } from 'react-router-dom';
import ClockDate from './ClockDate';

const Clock = () => (
  <div className="date">
    <Link to="/" />

    <ClockDate />
  </div>
);

export default Clock;
