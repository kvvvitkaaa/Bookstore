import Book from "../components/book/Book";
import booksData from "../helpers/books.json";
import { useState} from "react";
import search from '../img/search.svg';

const Catalog = () => {

    const [sortingOption, setSortingOption] = useState('none');
    const [searchString, setSearchString] = useState('');

    function Sort(books) {
        
        switch(sortingOption){
            case 'desc': return [...books].sort(function(a,b){return b.price - a.price});
            case 'asc': return [...books].sort(function(a,b){return a.price - b.price});
            case 'abc': return [...books].sort((a, b) => a.title.localeCompare(b.title));
            default:
                return books;
        }
    }

    function handleSetSorting (e) {
        return setSortingOption(e.target.value);
    }

    function handleSearch (e) {
        return setSearchString(e.target.value.trim());
    }

    const filteredBooks = booksData.books.filter(book => {
        return book.title.toLowerCase().includes(searchString.toLowerCase());
    })

    return ( 
        <div className="mainPage-container">
            <div className="options">
                <select className="options-sorting" defaultValue='none' onChange={handleSetSorting} name="sort">
                    <option value="none" hidden disabled>Sort by</option>
                    <option value="desc">Price: descending</option>
                    <option value="asc">Price: ascending</option>
                    <option value="abc">Alphabetically</option>
                </select >
                <div className="options-search">
                    <img src={search} width='30' height='30' alt=''/>
                    <input type="text" placeholder="search..." className="search" name="search" onChange={handleSearch}/>
                </div>
            </div>
            {filteredBooks.length > 0 ?
            (<div className="catalog-wrapper">
                 {Sort(filteredBooks).map((book, index) => {
                    return <Book title={book.title} image={book.image} price={book.price} author={book.author} key={book.id} id={index} 
                    /> }
                )} 
            </div>) : 
            (
                <div id="searchResultNone"><p>Sorry,nothing found..</p></div>
            )}
        </div>
    )
}
export default Catalog;