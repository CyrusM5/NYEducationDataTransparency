import React from "react";

function Table(props) {
  return (
    <div className="App">
      <tr>
        <td>{props.AGGREGATION_NAME}</td>
        <td>{props.ENROLL_CNT}</td>
        <td>{props.GRAD_CNT}</td>
        <td>{props.GRAD_PCT}</td>
        <td>{props.LOCAL_CNT}</td>
        <td>{props.LOCAL_PCT}</td>
        <td>{props.REG_CNT}</td>
        <td>{props.REG_PCT}</td>
        <td>{props.REG_ADV_CNT}</td>
        <td>{props.REG_ADV_PCT}</td>
        <td>{props.NON_DIPLOMA_CREDENTIAL_CNT}</td>
        <td>{props.NON_DIPLOMA_CREDENTIAL_PCT}</td>
        <td>{props.STILL_ENR_CNT}</td>
        <td>{props.STILL_ENR_PCT}</td>
        <td>{props.DROPOUT_CNT}</td>
        <td>{props.DROPOUT_PCT}</td>
      </tr>
    </div>
  );
}
/*<div className="App" class="grid-container" id="tryout">
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
  <tr>
    <td>{data[0].AGGREGATION_NAME}</td>
    <td>{data[0].ENROLL_CNT}</td>
    <td>{data[0].GRAD_CNT}</td>
    <td>{data[0].GRAD_PCT}</td>
    <td>{data[0].LOCAL_CNT}</td>
    <td>{data[0].LOCAL_PCT}</td>
    <td>{data[0].REG_CNT}</td>
    <td>{data[0].REG_PCT}</td>
    <td>{data[0].REG_ADV_CNT}</td>
    <td>{data[0].REG_ADV_PCT}</td>
    <td>{data[0].NON_DIPLOMA_CREDENTIAL_CNT}</td>
    <td>{data[0].NON_DIPLOMA_CREDENTIAL_PCT}</td>
    <td>{data[0].STILL_ENR_CNT}</td>
    <td>{data[0].STILL_ENR_PCT}</td>
    <td>{data[0].DROPOUT_CNT}</td>
    <td>{data[0].DROPOUT_PCT}</td>
  </tr>
</table>
</div>*/
export default Table;
