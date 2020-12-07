import React from "react";

const OrderButton = (props) => {
  var style = {
    width: 105,
    height: 80,
    backgroundColor: "#cde9d0",
    boxShadow: "none",
    outline: "none",
  };
  return (
    <div>
      <button
        disabled={
          props.selectedTable === null ||
          props.tableStatusData[props.selectedTable] === false
        }
        onClick={() =>
          props.onAdd(props.name, props.price, props.selectedTable)
        }
        style={style}
      >
        {props.name} | Rs-{props.price}
      </button>
    </div>
  );
};

export default OrderButton;
