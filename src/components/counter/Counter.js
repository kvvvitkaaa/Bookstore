import "./style.css";
import { useState } from 'react';

const Counter = ({onCountChange}) => {

    const [counter, setCounter] = useState(1);

    const handleClick = (action) => {
        if (action === 'minus' && counter > 1) {
            setCounter(counter - 1);
        } else if (action === 'plus' && counter < 42) {
            setCounter(counter + 1);
        }
    };

    return ( 
        <div className="counter-wrapper">
            <div className="counter-btn" data-action="minus" onClick={() => handleClick('minus')}>-</div>
            <div className="counter" data-counter>{counter}</div>
            <div className="counter-btn" data-action="plus" onClick={() => handleClick('plus')}>+</div>
        </div>
     );
}
 
export default Counter;