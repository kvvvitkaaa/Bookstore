import { useParams } from 'react-router-dom';
import { useState } from 'react';
import books from "../../helpers/books.json";

import notFound from "../../img/notFound.png";
import Counter from '../counter/Counter';

import "./style.css";
import Cart from '../../pages/Cart';
import Item from '../item_cart/Item';

function BookPage() {
    const { id } = useParams();

    const book = books.books[id];

    const [counter, setCounter] = useState(1);

    const bookInfo = {
        id: book.id,
        bookName: book.title,
        bookPrice: book.price,
        bookQuantity: counter
    };

    const handleClick = (action) => {
        if (action === 'minus' && counter > 1) {
            setCounter(counter - 1);
        } else if (action === 'plus' && counter < 42) {
            setCounter(counter + 1);
        }
    };

    const handleAddToCart = () => {
        // Handle adding to the cart with bookInfo
        console.log(bookInfo);
    }

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
                        <li>Price, $</li>
                        <li>Count</li>
                        <li>Total price</li>
                    </ul>
                    <ul className="payment-column sum">
                        <li>{book.price} </li>
                        <li>        
                            <div className="counter-wrapper">
                                <div className="counter-btn" data-action="minus" onClick={() => handleClick('minus')}>-</div>
                                <div className="counter" data-counter>{counter}</div>
                                <div className="counter-btn" data-action="plus" onClick={() => handleClick('plus')}>+</div>
                            </div>
                        </li>
                        <li></li>
                    </ul>
                    <button className="btn" onClick={() => <Item itemInfo={bookInfo} />}>Add to cart</button>
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
