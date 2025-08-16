import { useSelector } from "react-redux";

const ProductsList = () => {
  const products = useSelector((state) => state.products);
  
  return (
    <div className="products-list">
    <table className="products-table">
      <tbody>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
        {products.map((product, i) => (
          <tr key={i}>
            <td>{product.name}</td>
            <td>${product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default ProductsList;
