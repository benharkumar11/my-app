import React, { useEffect, useState } from "react";

function Counter(props) {
    const { initialValue, incrementBy } = props;
    const [count, setCount] = useState(initialValue);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    const handleClick = () => {
        setCount(count + incrementBy);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}

export default Counter;