import { ColorBox } from "./ColorBox";
import { useState } from "react";

const OnClickChangeColor = ({ colors }) => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const changeColor = () => {
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
  };

  const nextColorIndex = (currentColorIndex + 1) % colors.length;
  const nextColor = colors[nextColorIndex];

return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <button onClick={changeColor} style={{ color: nextColor }}>
            Next color : {nextColor}
        </button>
        <ColorBox color={colors[currentColorIndex]} />
    </div>
);
};

export { OnClickChangeColor };
