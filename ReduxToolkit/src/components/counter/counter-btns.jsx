import { useDispatch } from "react-redux";
import Count from "./count";
import { decrement, increment } from "../../redux/slices/counter-slice";

const CounterBtns = () => {
  const dispatch = useDispatch();
  return (
    <div className="counter-container">
      <div className="counter-buttons">
        <button className="btn btn-success" onClick={()=> dispatch(increment())}>Increment</button>
      </div>
      <Count />
      <div className="counter-buttons">
        <button className="btn btn-danger" onClick={()=> dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterBtns;
