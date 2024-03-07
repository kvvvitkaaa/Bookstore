import "./style.css";

import cart from "../../img/cart.svg";
import avatar from "../../img/avatar.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { useContext } from "react";

const Navbar = () => {

    const username = JSON.parse(localStorage.getItem('username'));
    const navigate = useNavigate();
    const {clearCart, cartItems} = useContext(ShopContext);

    const handleClick = () => {
        localStorage.clear();
        clearCart();
        navigate('/login');

    }

    const itemsInCart = [];

    Object.entries(cartItems).forEach(([productId, quantity]) => {
        for (let i = 0; i < quantity; i++) {
            itemsInCart.push(productId);
        }
    });

    console.log(itemsInCart);

    return ( 
        <nav className="navbar">
                <div className="navbar-row">
                    <NavLink to="/" className="logo">Book Universe {username !== null ? `/${username}` : ''} </NavLink>

                    {username !== null ?
                        (<div className="menu">
                            <NavLink to="/cart" className="navbar-icon">
                                <img className="navbar-icon" src={cart} alt="cart" />
                                {itemsInCart.length > 0 && (
                                    <span className="cart-items-count">{itemsInCart.length}</span>
                                )}
                            </NavLink>
                            <img className="navbar-icon" src={avatar} alt="profile" />
                            <button className="btn" href="#!" onClick={handleClick}>Sign out</button>
                        </div>) : <></>
                        }
                </div>
        </nav>
     );
}
 
export default Navbar;