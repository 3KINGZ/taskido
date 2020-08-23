import React, { useState } from "react";
import ReactDOM from "react-dom";
import Result from "./containers/Applicationresult/Applicationresult";
import Inputs from "./containers/Input/Inputs";
import SideBar from "./containers/Sidebar/Sidebar";
import ToggleSidebar from "./components/Togglesidebar/Togglesidebar";
import Notice from "./components/Notice/Notice";
import logo from "./assets/iirsm_main_logo.png";
import Membership from "./components/Membership/Membership";
import "./index.css";

export const OnSideBar = React.createContext();

function IIRSM() {
  const [notice, setNotice] = useState(true);
  const [showMembership, setShowMembership] = useState(false);
  const [membershipGrade, setmembershipGrade] = useState("");
  const [TOMInput, setTOMInput] = useState(false);
  const [typeOfMemebership, setTypeOfMemberShip] = useState({});
  const [showError, setShowError] = useState(false);
  const [nextStage, setNextStage] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  const handleShowInput = () => setShowInput(true);

  const setTOM = (e, value) => {
    const membership = { ...typeOfMemebership };
    membership[value] = e.target.value;
    setTypeOfMemberShip(membership);
  };

  const showMembershipCont = () => {
    setNotice(false);
    setShowMembership(true);
  };

  const validate = () => {
    if (
      !typeOfMemebership.country ||
      !typeOfMemebership.membershipLevel ||
      !typeOfMemebership.duration
    ) {
      setShowError(true);
    } else {
      setNextStage(true);
    }
  };

  const closeNotice = () => {
    setTOMInput(true);
    setNotice(false);
    setShowMembership(false);
  };
  const onHandleSidebar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div className="main-content">
      <OnSideBar.Provider value={onHandleSidebar}>
        <SideBar sideBarState={showSideBar} />
      </OnSideBar.Provider>
      <div className="main-container">
        <OnSideBar.Provider value={onHandleSidebar}>
          <ToggleSidebar icon="menu" />
        </OnSideBar.Provider>
        <img src={logo} alt="logo" />
        <div className="sitemap">
          <p className="sitemap-c">
            <span>YOU ARE HERE: </span>
            <span style={{ opacity: "0.5" }}>
              Home {">>"} Membership {">>"} Join
            </span>
          </p>
          {notice ? <Notice handleMembership={showMembershipCont} /> : null}
          {showMembership ? (
            <Membership
              membershipGrade={membershipGrade}
              onSetMembershipGrade={(e) => setmembershipGrade(e.target.value)}
              onCloseNotice={closeNotice}
            />
          ) : null}
          {TOMInput && !nextStage ? (
            <>
              {showError ? (
                <div className="error">
                  <h4>You need the following</h4>
                  <ul>
                    {!typeOfMemebership.country ? <li>Country</li> : null}
                    {!typeOfMemebership.membershipLevel ? (
                      <li>Membership Level</li>
                    ) : null}
                    {!typeOfMemebership.duration ? <li>Duration</li> : null}
                  </ul>
                </div>
              ) : null}
              <div className="type-of-membership">
                <h2 className="blue">Apply online</h2>
                <h3 className="blue" style={{ marginTop: "4%" }}>
                  THANK YOU FOR YOUR INTEREST IN JOINING IIRSM.
                </h3>
                <p>
                  In order to proceed with your online application please select
                  which type of membership you are applying for:
                </p>
                <div className="select-group">
                  <select
                    onChange={(e) => {
                      setTOM(e, "country");
                    }}
                  >
                    <option>COUNTRY</option>
                    <option>Germany</option>
                    <option>Italy</option>
                    <option>France</option>
                    <option>Netherland</option>
                    <option>UK</option>
                    <option>USA</option>
                  </select>
                  <select
                    onChange={(e) => {
                      setTOM(e, "membershipLevel");
                    }}
                  >
                    <option>MEMBERSHIP LEVEL</option>
                    <option>Affilate</option>
                    <option>Associate</option>
                    <option>Associate</option>
                    <option>Fellow</option>
                    <option>Member</option>
                    <option>Specialist</option>
                  </select>
                  <select onChange={(e) => setTOM(e, "duration")}>
                    <option>DURATION</option>
                    <option>1 Year</option>
                    <option>2 Years</option>
                    <option>3 Years</option>
                  </select>
                </div>
                <button
                  className="btn"
                  style={{
                    color: "white",
                    backgroundColor: "rgb(23, 124, 240)",
                  }}
                  onClick={validate}
                >
                  CONTINUE
                </button>
              </div>
            </>
          ) : null}
          {nextStage ? (
            <Result
              data={typeOfMemebership}
              input={showInput}
              onHandleInput={handleShowInput}
            />
          ) : null}
          {showInput ? <Inputs /> : null}
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<IIRSM />, document.getElementById("root"));
