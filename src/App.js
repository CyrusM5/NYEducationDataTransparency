import React, { useState } from "react";
import Table from "/src/table.js";
import data from "/src/education_data.js";
import "./styles.css";
const App = () => {
  const [contacts, setContacts] = useState(data);
  return (
    <div className="App" class="grid-container" id="tryout">
      <h1>New York Graduation Rates</h1>
      <hr />
      <table id="customers">
        <tr>
          <th>School</th>
          <th>Enrollment</th>
          <th>Graduated</th>
          <th>Percent Graduated</th>
          <th>Local Diplomas</th>
          <th>Percent Local Diplomas</th>
          <th>Regents Diplomas</th>
          <th>Percent Regents Diplomas</th>
          <th>Advanced Regents Diplomas</th>
          <th>Percent Advanced Regents Diplomas</th>
          <th>Non-Diplomas</th>
          <th>percent Non-Diplomas</th>
          <th>Still Enrolled</th>
          <th>Percent Still Enrolled</th>
          <th>Dropouts</th>
          <th>Percent Dropouts</th>
        </tr>
        {contacts.map((contact) => (
          <tr>
            <td>{contact.AGGREGATION_NAME}</td>
            <td>{contact.ENROLL_CNT}</td>
            <td>{contact.GRAD_CNT}</td>
            <td>{contact.GRAD_PCT}</td>
            <td>{contact.LOCAL_CNT}</td>
            <td>{contact.LOCAL_PCT}</td>
            <td>{contact.REG_CNT}</td>
            <td>{contact.REG_PCT}</td>
            <td>{contact.REG_ADV_CNT}</td>
            <td>{contact.REG_ADV_PCT}</td>
            <td>{contact.NON_DIPLOMA_CREDENTIAL_CNT}</td>
            <td>{contact.NON_DIPLOMA_CREDENTIAL_PCT}</td>
            <td>{contact.STILL_ENR_CNT}</td>
            <td>{contact.STILL_ENR_PCT}</td>
            <td>{contact.DROPOUT_CNT}</td>
            <td>{contact.DROPOUT_PCT}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default App;
//"AGGREGATION_NAME": "DUNDEE JUNIOR-SENIOR HIGH SCHOOL",
//"ENROLL_CNT": "47",
//"GRAD_CNT": "36",
//"GRAD_PCT": "77%",
//LOCAL_CNT": "5",
//"LOCAL_PCT": "11%",
//"REG_CNT": "24",
//"REG_PCT": "51%",
//"REG_ADV_CNT": "7",
//"REG_ADV_PCT": "15%",
//"NON_DIPLOMA_CREDENTIAL_CNT": "2",
//"NON_DIPLOMA_CREDENTIAL_PCT": "4%",
//"STILL_ENR_CNT": "7",
//"STILL_ENR_PCT": "15%",
//"DROPOUT_CNT": "2",
//"DROPOUT_PCT": "4%"*;
