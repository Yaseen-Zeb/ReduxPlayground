import { reduxTypes } from "../utils";
import { combineReducers } from "redux";

const intialState = {
  count: 0,
  color: "red",
  products: [],
};

// without combineReducers

// export const reducer = (state = intialState, action) => {
//   switch (action.type) {
//     case reduxTypes.INCREMENT:
//       return { ...state, count: state.count + 1 };
//     case reduxTypes.DECREMENT:
//       return { ...state, count: state.count - 1 };
//     case reduxTypes.CHANGE_COLOR:
//       return { ...state, color: action.newColor };
//     case reduxTypes.ADD_PRODUCT:
//       return {
//         ...state,
//         products: [
//           ...state.products,
//           { id: action.id, name: action.name, price: action.price },
//         ],
//       };
//     case reduxTypes.REMOVE_PRODUCT:
//       return {
//         ...state,
//         products: state.products.filter((product) => product.id != action.id),
//       };
//     default:
//       return state;
//   }
// };

const counterReducer = (state = intialState.count, action) => {
  switch (action.type) {
    case reduxTypes.INCREMENT:
      return state + 1;
    case reduxTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const colorReducer = (state = intialState.color, action) => {
  switch (action.type) {
    case reduxTypes.CHANGE_COLOR:
      return action.newColor;
    default:
      return state;
  }
};

const productReducer = (state = intialState.products, action) => {
  switch (action.type) {
    case reduxTypes.ADD_PRODUCT:
      return [
        ...state,
        { id: action.id, name: action.name, price: action.price },
      ];
    case reduxTypes.REMOVE_PRODUCT:
      return state.filter((product) => product.id != action.id);
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  count: counterReducer,
  color: colorReducer,
  products: productReducer,
});
