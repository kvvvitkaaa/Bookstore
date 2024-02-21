import Counter from "../counter/Counter";
import { ShopContext } from "../../context/shopContext";
import { useContext, useState } from "react";

const Item = (props) => {

    const {title, price} = props.data;
    const {getTotalPriceItem} = useContext(ShopContext);

    const prevCounter = props.counter;

    const [counter, setCounter] = useState(prevCounter);

    const handleClick = (action) => {
        if (action === 'minus' && counter > 1) {
            setCounter(counter - 1);
        } else if (action === 'plus' && counter < 42) {
            setCounter(counter + 1);
        }
    };
    return ( 
        <div className="cart-item">
            <div className="book-title">
                {title}
            </div>
            <div className="counter-wrapper">
                <button className="counter-btn" onClick={() => handleClick('minus')}>-</button>
                <div className="counter" data-counter>{counter}</div>
                <button className="counter-btn" onClick={() => handleClick('plus')}>+</button>
            </div>
            <div>
                ${getTotalPriceItem(counter, price)}
            </div>
        </div>
     );
}
 
export default Item;