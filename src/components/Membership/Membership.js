import React from "react";

function Membership({ membershipGrade, onSetMembershipGrade, onCloseNotice }) {
  return (
    <div className="membership">
      <h2>Which membership grade is right for you?</h2>
      <div>
        <label>HIGHEST RELEVANT QUALIFICATION</label>
        <br />
        <select onChange={onSetMembershipGrade} value={membershipGrade}>
          <option value="Environment Lead Auditor Course">
            Environment Lead Auditor Course
          </option>
          <option value="Quality Lead Auditor Course QMS">
            Quality Lead Auditor Course QMS
          </option>
          <option value="Bachelor of Engineering (BE)">
            Bachelor of Engineering (BE)
          </option>
          <option value="Bachelor of Science (BSc)">
            Bachelor of Science (BSc)
          </option>
          <option value="Bachelor of Technology (BTech)">
            Bachelor of Technology (BTech)
          </option>
          <option value="Bachelor of Law (LLB)">Bachelor of Law (LLB)</option>
          <option value="Bsc Diploma in Environment">
            Bsc Diploma in Environment
          </option>
          <option value="Bsc Diploma in Environment">
            Bsc Diploma in Environment
          </option>
          <option value="Bachelor of OHS">Bachelor of OHS</option>
        </select>
      </div>
      <p>
        Please select your highest level of qualification to see which grade of
        IIRSM membership you can apply for.
      </p>
      <div style={{ marginTop: "2%" }}>
        <p>You can apply for:</p>
        <p>{membershipGrade ? "Specialist Member - SIIRSM" : null}</p>
      </div>
      {membershipGrade ? (
        <button className="btn" onClick={onCloseNotice}>
          OK
        </button>
      ) : null}
    </div>
  );
}

export default Membership;
