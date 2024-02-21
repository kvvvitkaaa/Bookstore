import { NavLink } from 'react-router-dom';

import './style.css';

import notFound from "../../img/notFound.png";

const Book = (props) => {

    return ( 
        <div className="book-wrapper">

            <img className="book-cover" src={props.image || notFound}  alt={props.title} />

            <div className='book-info'>
                <h2 className='book-title'>{props.title.length > 24 ? props.title.slice(0, 23) + "..." : props.title}</h2>
                <p className='book-author'>{props.author}</p>
            </div>

            <div className="book-details">
                <p className="book-price">{props.price}$</p>
                <NavLink to={`/book/` + props.id} className='btn'>View</NavLink>
            </div>

        </div>
     );
}
 
export default Book;    