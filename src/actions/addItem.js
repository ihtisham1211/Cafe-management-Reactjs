import { ADD_TABLE_ITEM } from '../constants/constants.js';

const addItem = (name, price, id) => {
	return{
		type: ADD_TABLE_ITEM,
		tableId: id,
		item: {
			name: name,
			price: price
		}
	}
}

export default addItem;