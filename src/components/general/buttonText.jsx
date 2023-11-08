import { useState } from "react";
import "./buttonText.css";
import PropTypes from 'prop-types';
// dev can use ButtonText component to build their custom button text with some fields: text, shape, width, height, backgroundColor, textColor, leftIconPath, rightIconPath
export default function ButtonText({
  text,
  shape,
  width,
  height,
  backgroundColor,
  textColor,
  leftIconPath,
  rightIconPath,
  children,
  onSelected,
}) {
  const [count1, setCount1] = useState(false);

  function setBoolean() {
    setCount1(!count1);
    console.log("alo");
  }
  return (
    <div>
      <button
        className={`${shape} ${width} ${height} p-3 font-semibold cursor-pointer transition border border-transparent bg-${backgroundColor} text-${textColor} text-center text-decoration-none inline-block text-16 transform scale-100 hover:scale-110`}
        onClick={onSelected}
      >
        {leftIconPath && <span className="left-icon">{leftIconPath}</span>}
        {text}
        {rightIconPath && <span className="right-icon">{rightIconPath}</span>}
      </button>
    </div>
  );
}

ButtonText.propTypes = {
  text: PropTypes.string.isRequired, 
  shape: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  leftIconPath: PropTypes.string,
  rightIconPath: PropTypes.string,
  onSelected: PropTypes.func, 
};

