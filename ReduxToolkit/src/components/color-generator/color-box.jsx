import { useSelector } from "react-redux";

const ColorBox = () => {
const color =  useSelector(state => state.colors.color)
  return (
    <div 
      className="color-box" 
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default ColorBox;
