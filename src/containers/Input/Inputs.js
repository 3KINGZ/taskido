import React, { useState } from "react";
import "./inputs.css";

function Inputs() {
  const [personalDetails, setpersonalDetails] = useState({});
  const [businessDetails, setBusinessDetails] = useState({});
  const [preferred, setPreferred] = useState({});
  const [specialism, setSpecialism] = useState({});
  const [username, setUsername] = useState({});
  const [password, setPassWord] = useState({});
  const [sponsor, setSponsor] = useState({});

  const setPDData = (e, key) => {
    const data = { ...personalDetails };
    data[key] = e.target.value;
    setpersonalDetails(data);
  };
  const setBDData = (e, key) => {
    const data = { ...businessDetails };
    data[key] = e.target.value;
    setBusinessDetails(data);
  };
  const setPDdata = (e, key) => {
    const data = { ...preferred };
    data[key] = e.target.value;
    setPreferred(data);
  };
  const setSPData = (e, key) => {
    const data = { ...specialism };
    data[key] = e.target.value;
    setSpecialism(data);
  };
  const setUNData = (e, key) => {
    const data = { ...username };
    data[key] = e.target.value;
    setUsername(data);
  };
  const setPWData = (e, key) => {
    const data = { ...password };
    data[key] = e.target.value;
    setPassWord(data);
  };
  const setSPSData = (e, key) => {
    const data = { ...sponsor };
    data[key] = e.target.value;
    setSponsor(data);
  };
  const logAll = () => {
    const data = {
      personalDetails,
      businessDetails,
      preferred,
      specialism,
      username,
      password,
      sponsor,
    };
    console.log(data);
  };

  return (
    <div className="inputts">
      <div className="section">
        <h3>Personal Details</h3>
        <div className="main-inputs-container">
          <div>
            <select onChange={(e) => setPDData(e, "title")}>
              <option value="re" disabled defaultValue hidden>
                Title
              </option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Ms">Ms</option>
              <option value="Sir"></option>
              <option value="Dr">Dr</option>
              <option value="Prof">Prof</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Address line 1"
              onChange={(e) => setPDData(e, "address1")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Day time telephone"
              onChange={(e) => setPDData(e, "dayTimeTelephone")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="first name"
              onChange={(e) => setPDData(e, "firstName")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="address line 2"
              onChange={(e) => setPDData(e, "address2")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="mobile telephone"
              onChange={(e) => setPDData(e, "mobileTelephone")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="last name/family name"
              onChange={(e) => setPDData(e, "name_family_name")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="address line 3"
              onChange={(e) => setPDData(e, "address3")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="personal email"
              onChange={(e) => setPDData(e, "personalEmail")}
            />
          </div>
          <div>
            <select onChange={(e) => setPDData(e, "gender")}>
              <option value="re" disabled selected hidden>
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Town"
              onChange={(e) => setPDData(e, "town")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Business email"
              onChange={(e) => setPDData(e, "businessEmail")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Nationality"
              onChange={(e) => setPDData(e, "nationality")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="County/state"
              onChange={(e) => setPDData(e, "county_state")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="address line 3"
              onChange={(e) => setPDData(e, "address3")}
            />
          </div>
          <div>
            <input
              type="date"
              placeholder="D.O.B"
              onChange={(e) => setPDData(e, "DOB")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="country"
              onChange={(e) => setPDData(e, "country")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Employment status"
              onChange={(e) => setPDData(e, "employmentStatus")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Postcode/zip"
              onChange={(e) => setPDData(e, "postcode_zip")}
            />
          </div>
        </div>
        <div className="section">
          <h3>BUSINESS DETAILS</h3>
          <div className="main-inputs-container">
            <div>
              <input
                type="text"
                placeholder="Job title"
                onChange={(e) => setBDData(e, "job_title")}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="company address line1 2"
                onChange={(e) => setBDData(e, "company_address_line1_2")}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="company county/state"
                onChange={(e) => setBDData(e, "company_county_state")}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="company name"
                onChange={(e) => setBDData(e, "company_name")}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="comapany address line3"
                onChange={(e) => setBDData(e, "comapany_address_line3")}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="county"
                onChange={(e) => setBDData(e, "county")}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Company address line 1"
                onChange={(e) => setBDData(e, "company_address_line_1")}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Company town"
                onChange={(e) => setBDData(e, "company_town")}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Company postcode"
                onChange={(e) => setBDData(e, "company_postcode")}
              />
            </div>
            <div>
              <input
                type="date"
                placeholder="Business telephone"
                onChange={(e) => setBDData(e, "business_telephone")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <h3>PREFERRED</h3>
        <div className="main-inputs-container">
          <div>
            <input
              type="text"
              placeholder="Preferred email address"
              onChange={(e) => setPDdata(e, "Preferred_email_address")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Preferred mailing address"
              onChange={(e) => setPDdata(e, "Preferred_mailing_address")}
            />
          </div>
        </div>
      </div>
      <div className="section">
        <h3>YOUR SPECIALISM</h3>
        <div className="main-inputs-container">
          <input type="text" onChange={(e) => setSPData(e, "specialism")} />
        </div>
      </div>
      <div className="section">
        <h3>USERNAME</h3>
        <div>
          <input type="text" onChange={(e) => setUNData(e, "username")} />
        </div>
      </div>
      <div className="section">
        <h3>PASSWORD</h3>
        <div>
          <input type="password" onChange={(e) => setPWData(e, "password")} />
        </div>
      </div>
      <div className="section">
        <h3>CONFIRM PASSWORD</h3>
        <div>
          <input
            type="password"
            onChange={(e) => setPWData(e, "confirm_password")}
          />
        </div>
      </div>
      <div className="section">
        <h3>WHO PAYS FOR YOUR MEMBERSHIP SUBSCRIPTION?</h3>
        <div>
          <select onChange={(e) => setSPSData(e, "sponsor")}>
            <option value="Myself">Myself</option>
            <option value="My company">My company</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <button
        onClick={logAll}
        className="btn"
        style={{ backgroundColor: "rgb(23, 124, 240)", color: "white" }}
      >
        SUBMIT
      </button>
    </div>
  );
}

export default Inputs;
