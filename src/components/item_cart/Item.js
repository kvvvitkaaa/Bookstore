import { ShopContext } from "../../context/shopContext";
import { useContext } from "react";

const Item = (props) => {

    const {title, price, id} = props.data;
    const {getTotalPriceItem, removeFromCart, cartItems, addToCart} = useContext(ShopContext);

    return ( 
        <div className="cart-item">
            <div className="book-title">
                {title}
            </div>
            <div className="counter-wrapper">
                <button className="counter-btn" onClick={() => removeFromCart(id)}>-</button>
                <div className="counter" data-counter>{cartItems[id]}</div>
                <button className="counter-btn" onClick={() => addToCart(id, 1)}>+</button>
            </div>
            <div>
                ${getTotalPriceItem(cartItems[id], price)}
            </div>
        </div>
     );
}
 
export default Item;