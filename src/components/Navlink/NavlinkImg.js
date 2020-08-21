import React from "react";
import "./navlink.css";

const NavLinkImg = ({ img, imgAlt, text }) => {
  return (
    <div className="nav-link">
      <a href="#$">
        <img src={img} alt={imgAlt} />
        <span> {text}</span>
      </a>
    </div>
  );
};

export default NavLinkImg;
