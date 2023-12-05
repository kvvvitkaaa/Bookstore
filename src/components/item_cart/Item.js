const Item = () => {
    return ( 
        <div className="cart-item">
                    <div className="book-title">
                    {props.title}
                    </div>
                    <div>
                        Count
                    </div>
                    <div>
                        Total
                    </div>
        </div>
     );
}
 
export default Item;