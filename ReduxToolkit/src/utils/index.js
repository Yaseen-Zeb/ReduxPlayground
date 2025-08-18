export const reduxTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  ADD_PRODUCT: "ADD_PRODUCT",
  CHANGE_COLOR: "CHANGE_COLOR",
};

export const generateColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
};

export const generateProduct = () => {
  const adjectives = [
    "Awesome", "Sleek", "Ergonomic", "Rustic",
    "Modern", "Smart", "Portable", "Durable",
  ];
  const items = [
    "Chair", "Table", "Phone", "Laptop",
    "Watch", "Shoes", "Backpack", "Bottle", "Headphones",
  ];

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomItem = items[Math.floor(Math.random() * items.length)];

  const name = `${randomAdjective} ${randomItem}`;
  const price = (Math.random() * 200 + 10).toFixed(2);

  const id = crypto.randomUUID();

  return { id, name, price: parseFloat(price) };
};


