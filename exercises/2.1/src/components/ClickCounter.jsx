import { useState } from 'react';

const ClickCounter = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
        <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    );
}

export { ClickCounter }