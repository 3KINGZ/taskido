import React from "react";
import home from "../../assets/home.svg";
import search from "../../assets/search (1).svg";
import NavLink from "../../components/Navlink/Navlink";
import NavLinkImg from "../../components/Navlink/NavlinkImg";

function NavLinkPlain() {
  return (
    <div className="nav-links">
      <NavLinkImg img={home} imgAlt="home-logo" text=" HOME" />
      <NavLinkImg img={search} imgAlt="search-logo" text="SEARCH" />
      <NavLink text="MEMBERSHIP" />
      <NavLink text="Training & Events" />
      <NavLink text="About" />
      <NavLink text="News" />
      <NavLink text="PRODUCTS & PUBLICATIONS" />
      <NavLink text="REGIONAL & NETWORK" />
      <NavLink text="INFO-HUB" />
      <NavLink text="WORKING TOGETHER" />
    </div>
  );
}

export default NavLinkPlain;
