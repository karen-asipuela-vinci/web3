import { useState } from 'react';

const ClickCounter = ({titre, message}) => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
        <h2>{titre}</h2>
        <button onClick={() => setCount(count + 1)}>{count}</button>
        {count > 10 ? <div>{message}</div> : null}
        </div>
    );
}

export { ClickCounter }