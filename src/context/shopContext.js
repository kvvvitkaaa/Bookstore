import { createContext, useState } from "react";
import products from '../helpers/books.json';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    const defaultCart = {};

    for(let index = 1; index < products.books.length + 1; index++) {
        defaultCart[index] = 0;
    };

    return defaultCart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalPriceItem = (count, price) => {

        const res = Number(count)*price;

        return res.toFixed(2);

    }

    const addToCart = (itemId, count) => {
        return setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + Number(count)}));
    }

    const removeFromCart = (itemId) => {
        return setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }

    const contextValue = {getTotalPriceItem,addToCart,removeFromCart, cartItems};

    console.log(cartItems);

    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>;
}