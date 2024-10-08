import colors from "../../data/data.js";
import "../../App.css";
import { useState } from "react";

const ClickableBox = () => {
  const [ColorArray, ChangeColor] = useState(
    Math.floor(Math.random() * colors.length)
  );

  const handleClick = () => {
    ChangeColor((OldColor) => (OldColor + 1) % colors.length);
  };

  return (
    <div
      className="clickablebox"
      style={{ backgroundColor: colors[ColorArray] }}
      onClick={handleClick}
    ></div>
  );
};

export default ClickableBox;
