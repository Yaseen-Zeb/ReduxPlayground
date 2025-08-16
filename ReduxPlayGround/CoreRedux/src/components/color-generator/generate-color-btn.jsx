import { useDispatch } from "react-redux";
import ColorBox from "./color-box";
import { changeColor } from "../../redux/action";

const GenerateColorBtn = () => {
  const dispatch = useDispatch();
  return (
    <div className="color-generator-container">
      <ColorBox />
      <button 
        className="btn btn-primary" 
        onClick={() => dispatch(changeColor())}
      >
        Change Color
      </button>
    </div>
  );
};

export default GenerateColorBtn;
