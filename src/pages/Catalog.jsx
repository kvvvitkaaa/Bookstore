import Book from "../components/book/Book";
import books from "../helpers/books.json";

const Catalog = () => {
    return ( 
        <div className="container main">
            <div className="catalog-wrapper">
            
                {books.books.map((book, index) => {
                    return <Book title={book.title} image={book.image} price={book.price} author={book.author} key={book.id} id={index} 
                    /> }
                )}

            </div>
        </div>
     )
}
 
export default Catalog;