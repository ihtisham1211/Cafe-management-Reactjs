import { connect } from "react-redux";
import OrderList from "../components/OrderList.jsx";
import deleteItem from "../actions/deleteItem.js";

const mapStateToProps = state => {
  return {
    selectedTable: state.selectedTable,
    items: state.tableData[state.selectedTable]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (tableId, id) => {
      console.log(tableId);

      dispatch(deleteItem(tableId, id));
    }
  };
};
const OrderListContainer = connect(mapStateToProps, mapDispatchToProps)(
  OrderList
);

export default OrderListContainer;
