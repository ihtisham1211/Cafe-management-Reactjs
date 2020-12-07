import React from "react";

const Overview = (props) => {
  var style = {
    textAlign: "center",
    padding: "15px",
    backgroundColor: "#000",
    color: "#fff",
  };
  var numTables = 0;
  for (let i = 0; i < props.tableStatusData.length; i++) {
    numTables += props.tableStatusData[i];
  }
  return (
    <div
      style={style}
      className="rounded text-center border-bottom border-info"
    >
      <p className="display-4">Ijaz Cafe</p>
      <p className="h4 text-center">Tables filled: {numTables} / 16</p>
      <p className="h4 text-center">Money earned: {props.moneyEarned} Rs</p>
    </div>
  );
};

export default Overview;
