import React from "react";

function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input checked type="checkbox" />
          </td>
          <td>APPLICATION FEE </td>
          <td>£95</td>
        </tr>
        <tr>
          <td></td>
          <td>APPLICATION FEE </td>
          <td>£95</td>
        </tr>
        <tr>
          <td></td>
          <td>ANNUAL MEMBERSHIP FEE</td>
          <td>£340</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
