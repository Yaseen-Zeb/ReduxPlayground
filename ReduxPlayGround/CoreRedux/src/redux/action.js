import { generateColor, generateProduct, reduxTypes } from "../utils";

export const increment = () => {
  return { type: reduxTypes.INCREMENT };
};

export const decrement = () => {
  return {
    type: reduxTypes.DECREMENT,
  };
};

export function changeColor() {
  const newColor = generateColor();
  return {
    type: reduxTypes.CHANGE_COLOR,
    newColor,
  };
}

export function addProduct() {
  const { name, price } = generateProduct();
  
  return {
    type: reduxTypes.ADD_PRODUCT,
    name,
    price,
  };
}
