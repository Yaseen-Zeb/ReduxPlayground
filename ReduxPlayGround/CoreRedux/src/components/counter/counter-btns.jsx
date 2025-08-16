import { useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/action";
import Count from "./count";

const CounterBtns = () => {
  const dispatch = useDispatch();
  return (
    <div className="counter-container">
      <div className="counter-buttons">
        <button 
          className="btn btn-success" 
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
      <Count />
      <div className="counter-buttons">
        <button 
          className="btn btn-danger" 
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterBtns;