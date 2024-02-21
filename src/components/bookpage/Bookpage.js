import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import books from "../../helpers/books.json";

import notFound from "../../img/notFound.png";
import Counter from '../counter/Counter';

import "./style.css";
import Cart from '../../pages/Cart';
import {ShopContext} from '../../context/shopContext';

function BookPage() {
    const { id } = useParams();

    const book = books.books[id];

    const {getTotalPriceItem, addToCart, cartItems} = useContext(ShopContext);
    const [counterValue, setCounterValue] = useState(1); // Состояние для хранения текущего значения счетчика

    const handleCounterChange = (value) => {
        setCounterValue(value); // Обновляем текущее значение счетчика
    };

    return (
        <div className="container main">
            <div className="row">

                <div className='cover-wrapper'>
                    <img className="cover" src={book.image || notFound} alt="cover" />
                </div>

                <ul className="book-information">
                    <li><h1>{book.title} </h1></li>
                    <li><h2>{book.author} </h2></li>
                    <li><p>Level: {book.level} </p></li>
                    <li><p>Tags: {book.tags.join(", ")} </p></li>
                </ul>
                <div className="payment">
                    <ul className="payment-column">
                        <b>
                            <li>Price, $</li>
                            <li>Count</li>
                            <li>Total price</li>
                        </b>
                    </ul>
                    <ul className='payment-column'>
                        <li>{book.price} </li>
                        <li><Counter onCounterChange={handleCounterChange}/></li>
                        <li><b>${getTotalPriceItem(counterValue, book.price)}</b></li>
                    </ul>
                    <button className="btn" onClick={() => {addToCart(book.id, counterValue)}}>Add to cart</button>
                </div>
            </div>
            <aside className="book-description">
                <h1>Description:</h1>
                <p>{book.description}</p>
            </aside>
        </div>
    );
}
 
export default BookPage;
