import React from 'react';
import { Link } from 'react-router-dom';
import BreakfastForm from './MenuForm';

const BreakfastMenu = () => (
  <div className="box-lo__fm">
    <div className="fm-lo__header">Breakfast</div>

    <div className="fm-lo__box">
      <Link className="header__title" to="/" />

      <BreakfastForm />
    </div>
  </div>
);

export default BreakfastMenu;
