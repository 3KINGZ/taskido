import React from "react";
import "./navlink.css";

const NavLink = ({ text }) => {
  return (
    <div className="nav-link">
      <a href="#$">{text}</a>
    </div>
  );
};

export default NavLink;
