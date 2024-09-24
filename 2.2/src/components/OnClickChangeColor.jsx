import { ColorBox } from "./ColorBox";
import { useState } from "react";

const OnClickChangeColor = ({colors}) => {
    const [color, setColor] = useState(colors[0]);

    const changeColor = () => {
        const index = colors.indexOf(color);
        setColor(colors[(index + 1) % colors.length]);
    };

    return (
        <div>
        <button onClick={changeColor && console.log(color)} style={{ color }}>
            Change Color
        </button>
        <ColorBox color={color} />
        </div>
    );
}

export { OnClickChangeColor }