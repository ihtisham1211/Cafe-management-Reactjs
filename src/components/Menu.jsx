import React from "react";
import OrderButtonContainer from "../containers/OrderButtonContainer.js";

const Menu = () => {
  var style = {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "space-around",
    width: 210,
    height: 480,
    backgroundColor: "#000",
  };
  return (
    <div style={style}>
      <OrderButtonContainer name="Burger" price={120} />
      <OrderButtonContainer name="Pizza" price={750} />
      <OrderButtonContainer name="Fries" price={100} />
      <OrderButtonContainer name="Water" price={50} />
      <OrderButtonContainer name="Donut" price={30} />
      <OrderButtonContainer name="Tea" price={50} />
      <OrderButtonContainer name="Roti" price={10} />
      <OrderButtonContainer name="Steak" price={700} />
      <OrderButtonContainer name="Milk" price={80} />
      <OrderButtonContainer name="Salad" price={30} />
      <OrderButtonContainer name="Mix Fruit" price={200} />
      <OrderButtonContainer name="Eggs" price={10} />
    </div>
  );
};

export default Menu;
