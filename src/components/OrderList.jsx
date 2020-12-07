import React from "react";

const OrderList = (props) => {
  var style = {
    textAlign: "left",
    marginLeft: 20,
    display: "flex",
    flexDirection: "column",
  };

  if (props.selectedTable === null) return null;
  console.log(props);
  return (
    <div style={style}>
      {props.items.map((items, i) => {
        return (
          <div>
            <button
              className="btn btn-dark"
              onClick={() => props.onDelete(props.selectedTable, i)}
            >
              x
            </button>
            &nbsp; {items.name} | {items.price}-Rs
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default OrderList;
