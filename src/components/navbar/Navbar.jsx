import "./style.css";

import cart from "../../img/cart.svg";
import avatar from "../../img/avatar.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { useContext } from "react";

const Navbar = () => {

    const username = JSON.parse(localStorage.getItem('username'));
    const navigate = useNavigate();
    const {clearCart} = useContext(ShopContext);

    const handleClick = () => {
        localStorage.clear();
        clearCart();
        navigate('/login');

    }

    return ( 
        <nav className="navbar">
                <div className="navbar-row">
                    <NavLink to="/" className="logo">Book Universe {username !== null ? `/${username}` : ''} </NavLink>

                    <div className="menu">
                        <NavLink to="/cart"><img className="navbar-icon" src={cart} alt="cart"/></NavLink>
                        <img className="navbar-icon" src={avatar} alt="profile" />
                        <button className="btn" href="#!" onClick={handleClick}>Sign out</button>
                    </div>
                </div>
        </nav>
     );
}
 
export default Navbar;