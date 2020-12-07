import React from "react";

const ToggleTable = props => {
  var style = {
    padding: "10px",
    boxShadow: "none"
  }
  return (
    <div>
      <button
        className="btn btn-dark"
        style={style} 
        disabled={props.selectedTable === null}
        onClick={() => props.onToggle(props.selectedTable, props.tableData)}
      >
        {props.tableStatus ? "Check Out" : "Check In"}
      </button>
    </div>
  );
};

export default ToggleTable;
