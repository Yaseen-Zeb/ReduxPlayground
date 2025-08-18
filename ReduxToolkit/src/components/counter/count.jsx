import { useSelector } from "react-redux";

const Count = () => {
  const count = useSelector(state => state.counter.count);
  return (
    <div className="counter-display">{count}</div>
  );
};

export default Count;