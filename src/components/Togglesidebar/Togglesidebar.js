import React, { useContext } from "react";
import { Icon } from "@blueprintjs/core";
import "./Togglesidebar.css";
import { OnSideBar } from "../../index";

const ToggleSideBar = () => {
  const onHandleSideBar = useContext(OnSideBar);

  return (
    <button onClick={onHandleSideBar} className="toggle">
      <Icon icon="menu" />
    </button>
  );
};

export default ToggleSideBar;
