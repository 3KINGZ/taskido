import React, { useContext } from "react";
import { Icon } from "@blueprintjs/core";
import "./Togglesidebar.css";
import { OnSideBar } from "../../index";

const ToggleSideBar = ({ icon }) => {
  const onHandleSideBar = useContext(OnSideBar);

  return (
    <button onClick={onHandleSideBar} className="toggle">
      <Icon icon={icon} />
    </button>
  );
};

export default ToggleSideBar;
