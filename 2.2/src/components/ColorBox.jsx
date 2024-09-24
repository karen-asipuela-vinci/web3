const ColorBox = ({ color }) => {
    return (
        <div>
            <button>{color}</button>
            <div style={{ width: '64px', height: '64px', backgroundColor: color }} />
        </div>
    );
}

export { ColorBox }