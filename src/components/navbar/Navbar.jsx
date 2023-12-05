import "./style.css";

import cart from "../../img/cart.svg";
import avatar from "../../img/avatar.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="container">

                <div className="nav-row">
                    <NavLink to="/" className="logo">Book Universe</NavLink>

                    <div className="menu">
                        <NavLink to="/cart"><img className="navbar-icon" src={cart} alt="cart"/></NavLink>
                        <NavLink to="/login" className="btn" href="#!">Sign out</NavLink>
                        <img className="navbar-icon" src={avatar} alt="profile" />
                    </div>
                </div>
                
            </div>
        </nav>
     );
}
 
export default Navbar;