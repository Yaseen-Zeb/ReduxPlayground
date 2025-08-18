import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../redux/slices/product-slice";

const ProductsList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
console.log(products);

  return (
    <div className="products-list">
      <table className="products-table">
        <tbody>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th></th>
          </tr>
          {products.map(({ id, name, price }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{price}</td>
              <td>
                <span
                  className="del"
                  onClick={() => dispatch(removeProduct(id))}
                >
                  del
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
