import React from "react";

const TableButton = props => {
  var style = {
    width: 80,
    height: 80,
    margin: 25,
    border: props.selectedTable === props.id ? "3px solid red" : null,
    backgroundColor: props.tableStatusData[props.id] ? "red" : null,
    marginTop: "10px",
    outline: "none",
    boxShadow: "none"
  };
  return (
    <div>
      <button className="btn btn-info" onClick={() => props.onSelect(props.id)} style={style}>
        {props.id}
      </button>
    </div>
  );
};

export default TableButton;
