import { useState } from 'react';

const ClickCounter = ({titre, message, messageOver}) => {
    const [count, setCount] = useState(0);
    const [messageOverBool, setMessageOver] = useState(false);
    
    return (
        <div>
        <h2>{titre}</h2>
        {messageOverBool ? <div>{messageOver}</div> : null}
        <button onClick={() => setCount(count + 1)}
           onMouseOver={() => setMessageOver(!messageOverBool)}
            onMouseOut={() => setMessageOver(!messageOverBool)}
           >{count}</button>
        {count > 10 ? <div>{message}</div> : null}
        </div>
    );
}

export { ClickCounter }