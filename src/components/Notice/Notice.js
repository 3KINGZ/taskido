import React from "react";

function Notice({ handleMembership }) {
  return (
    <div className="notice">
      <h2>Before you apply</h2>
      <p>
        Thank you for your interest in applying for IIRSM Membership. Before you
        start please make sure that you have the following information ready:
      </p>
      <ul>
        <li>An up-to-date CV</li>
        <li>Certification of your highest qualification</li>
      </ul>
      <p>
        If you are applying for a Fellowship you also need to have your
        completed Fellowship petition ready to submit with your application.
      </p>
      <button onClick={handleMembership}>OK</button>
    </div>
  );
}

export default Notice;
