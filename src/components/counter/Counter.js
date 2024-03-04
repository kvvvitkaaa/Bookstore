import "./style.css";
import { useState } from 'react';

const Counter = ({ onCounterChange }) => {

    const [counter, setCounter] = useState(1);

    const handleClick = (action) => {
        if (action === 'minus' && counter > 1) {
            setCounter(counter - 1);
        } else if (action === 'plus' && counter < 42) {
            setCounter(counter + 1);
        }
    };

    onCounterChange(counter);

    return ( 
        <div className="counter-wrapper">
            <button className="counter-btn" data-action="minus" onClick={() => handleClick('minus')}>-</button>
            <div className="counter" data-counter >{counter}</div>
            <button className="counter-btn" data-action="plus" onClick={() => handleClick('plus')}>+</button>
        </div>
     );
}
 
export default Counter;