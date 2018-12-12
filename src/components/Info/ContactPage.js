import React from "react";
import { NavLink } from "react-router-dom";

const ContactPage = () => (
  <div className="content-container">
    <NavLink className="footer__title" to="/" />
    <h2 className="footer-layout__title"> State Highway 82 </h2>
    <h4 className="footer-layout__subtitle">Aspen, Colorado</h4>
  </div>
);

export default ContactPage;