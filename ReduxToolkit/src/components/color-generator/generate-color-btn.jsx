import { useDispatch } from "react-redux";
import ColorBox from "./color-box";
import { generateColor } from "../../utils";
import { generateColor as gc } from "../../redux/slices/color-slice";

const GenerateColorBtn = () => {
  const dispatch = useDispatch();

  return (
    <div className="color-generator-container">
      <ColorBox />
      <button
        className="btn btn-primary"
        onClick={() => {
          const color = generateColor();
          dispatch(gc(color));
        }}
      >
        Change Color
      </button>
    </div>
  );
};

export default GenerateColorBtn;
