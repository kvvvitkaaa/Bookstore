import { createContext, useEffect, useState } from "react";
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

     // Загрузка корзины из локального хранилища при загрузке страницы
     useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));
        if (savedCartItems) {
            setCartItems(savedCartItems);
        }
    }, []);

    // Сохранение корзины в локальное хранилище при изменении
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        console.log(JSON.parse(localStorage.getItem("cartItems")));
    }, [setCartItems]);



    const getTotalPriceItem = (count, price) => {

        const res = Number(count)*price;

        return res.toFixed(2);

    }

    const getTotalPriceCart = () => {
        let totalPrice = 0;

        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = products.books.find((product) => product.id === Number(item));
                totalPrice +=  itemInfo.price * cartItems[item];
            }
        }
        return totalPrice.toFixed(2);
    }

    const addToCart = (itemId, count) => {
        return setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + Number(count)}));
    }

    const removeFromCart = (itemId) => {
        return setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }

    const contextValue = {getTotalPriceItem,addToCart,removeFromCart, cartItems, getTotalPriceCart};

    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>;
}