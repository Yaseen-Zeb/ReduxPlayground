import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/action";
import ProductsList from "./products-list";

const ProductBtns = () => {
  const dispatch = useDispatch();
  return (
    <div className="products-container">
      <button 
        className="btn btn-primary" 
        onClick={() => dispatch(addProduct())}
      >
        Add Product
      </button>
      <ProductsList />
    </div>
  );
};

export default ProductBtns;
