import Item from "../components/item_cart/Item";
import BOOKS from '../helpers/books.json';

import { ShopContext } from "../context/shopContext";
import { useContext } from "react";

const Cart = () => {

    const {cartItems} = useContext(ShopContext);

    return ( 
        <div className="container">
            <h1>Your cart items</h1>
           <div className="cart-wrapper">
               {BOOKS.books.map((book) => {
                    if(cartItems[book.id] !== 0 ){
                        return <Item data={book} counter={cartItems[book.id]} />
                    }
                    return null;
               })}

               <div className="cart-menu">
                    <button className="btn">Purchase</button> 
                    <button className="btn">Continue shopping</button>
               </div>
            </div>
        </div>
     );
}
 
export default Cart;