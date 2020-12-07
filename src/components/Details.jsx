import React from "react";
import OrderListContainer from "../containers/OrderListContainer.js";
import ToggleTableContainer from "../containers/ToggleTableContainer.js";

const Details = props => {
  var style = {
    width: 190,
    height: 480,
    backgroundColor: "#cde9d0",
    textAlign: "center",
    paddingTop: "20px"
  };

  var total = 0;
  if (props.selectedTable !== null) {
    for (let i = 0; i < props.items.length; i++) {
      total += props.items[i].price;
    }
  }
  return (
    <div style={style}>
      <h2>Table #: {props.selectedTable}</h2>
      <br/>
      <ToggleTableContainer />
      <br/>
      <h2>Bill Total: {total}</h2>

      <h2>Orders: </h2>
      <OrderListContainer />
    </div>
  );
};

export default Details;
