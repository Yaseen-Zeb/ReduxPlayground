import { reduxTypes } from "../utils";

const intialState = {
  count: 0,
  color: "red",
  products: [],
};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case reduxTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case reduxTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    case reduxTypes.CHANGE_COLOR:
      return { ...state, color: action.newColor };
    case reduxTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products,
          { id: action.id, name: action.name, price: action.price },
        ],
      };
    case reduxTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id != action.id),
      };
    default:
      return state;
  }
};
