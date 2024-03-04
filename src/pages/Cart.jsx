import Item from "../components/item_cart/Item";
import BOOKS from '../helpers/books.json';

import { ShopContext } from "../context/shopContext";
import { useContext } from "react";

const Cart = () => {

    const {cartItems, getTotalPriceCart, clearCart} = useContext(ShopContext);
    const total = getTotalPriceCart();

    return ( 
        <div className="container">
            <h1>Your cart items</h1>
           <div className="cart-wrapper">
               {BOOKS.books.map((book) => {
                    if(cartItems[book.id] !== 0 ){
                        return <Item data={book} counter={cartItems[book.id]} key={book.id}/>
                    }
                    else { return null; }
               })}
                {total > 0  ?
                    <div className="cart-menu">
                            <div><strong>Subtotal: ${total}</strong></div>
                            <button className="btn btn-submit" onClick={clearCart}>Purchase</button> 
                    </div> 
               :    <h2 className="empty-message">Your cart is empty</h2>}
            </div>
        </div>
     );
}
 
export default Cart;