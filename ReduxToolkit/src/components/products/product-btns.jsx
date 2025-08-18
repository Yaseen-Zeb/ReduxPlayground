import { useDispatch } from "react-redux";
import ProductsList from "./products-list";
import { addProduct } from "../../redux/slices/product-slice";
import { generateProduct } from "../../utils/index";
const ProductBtns = () => {
  const dispatch = useDispatch();

  return (
    <div className="products-container">
      <button
        className="btn btn-primary"
        onClick={() => {
          const product = generateProduct();
          dispatch(addProduct(product));
        }}
      >
        Add Product
      </button>
      <ProductsList />
    </div>
  );
};

export default ProductBtns;
