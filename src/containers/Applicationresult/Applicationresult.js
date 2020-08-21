import React from "react";
import Table from "../Table/table";
import "./Applicationresult.css";
function Result({ data, onHandleInput, input }) {
  return (
    <div className="result-container">
      <h3 style={{ marginTop: "2%" }} className="blue">
        YOUR APPLICATION
      </h3>
      <div className="result-data">{data.country}</div>
      <div className="result-data">{data.membershipLevel}</div>
      <div className="result-data">{data.duration}</div>
      <p>
        The membership fee quoted is based on the country chosen in the previous
        step – this may change depending upon the preferred postal mailing
        address you choose when you apply.
      </p>
      {!input ? (
        <div className="membership-options">
          <h3 className="blue">YOUR MEMBERSHIP OPTIONS</h3>
          <Table />
        </div>
      ) : null}
      <button
        style={{ color: "white", backgroundColor: "rgb(23, 124, 240)" }}
        onClick={onHandleInput}
        className="btn"
      >
        CONTINUE
      </button>
    </div>
  );
}

export default Result;
