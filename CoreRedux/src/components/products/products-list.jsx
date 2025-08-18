import { useSelector ,useDispatch} from "react-redux";
import { removeProduct } from "../../redux/action";

const ProductsList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch()
  
  return (
    <div className="products-list">
    <table className="products-table">
      <tbody>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>
                <span
                  className="del"
                  onClick={() => dispatch(removeProduct(product.id))}
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
