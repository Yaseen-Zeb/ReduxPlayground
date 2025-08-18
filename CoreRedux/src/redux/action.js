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
  const { id, name, price } = generateProduct();
  
  return {
    type: reduxTypes.ADD_PRODUCT,
    id,
    name,
    price,
  };
}

export function removeProduct(productId) {
  return {
    type: reduxTypes.REMOVE_PRODUCT,
    id:productId
  };
}
