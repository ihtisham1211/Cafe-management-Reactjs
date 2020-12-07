import { connect } from "react-redux";
import OrderButton from "../components/OrderButton.jsx";
import addItem from "../actions/addItem.js";

const mapStateToProps = state => {
  return {
    selectedTable: state.selectedTable,
    tableStatusData: state.tableStatusData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (name, price, tableId) => {
      dispatch(addItem(name, price, tableId));
    }
  };
};
const OrderButtonContainer = connect(mapStateToProps, mapDispatchToProps)(
  OrderButton
);

export default OrderButtonContainer;
