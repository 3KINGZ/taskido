import React from "react";
import NavLinkPlain from "../../containers/Navlinksplain/Navlinksplain";
import NavLinkBlue from "../../containers/NavlinksBlue/Navlinksblue";
import ToggleSideBar from "../../components/Togglesidebar/Togglesidebar";

const SideBar = ({ sideBarState }) => {
  return (
    <div className={sideBarState ? "sidebar" : "hide"}>
      <ToggleSideBar icon="menu-closed" />
      <div className="logo">
        <h3>iirsm</h3>
      </div>
      <NavLinkPlain />
      <NavLinkBlue />
    </div>
  );
};

export default SideBar;
