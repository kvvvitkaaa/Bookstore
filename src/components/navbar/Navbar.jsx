import "./style.css";

import cart from "../../img/cart.svg";
import avatar from "../../img/avatar.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

    const username = JSON.parse(localStorage.getItem('username'));
    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.removeItem('username');
        navigate('/login');

    }

    return ( 
        <nav className="navbar">
            <div className="container">

                <div className="nav-row">
                    <NavLink to="/" className="logo">Book Universe / {username} </NavLink>

                    <div className="menu">
                        <NavLink to="/cart"><img className="navbar-icon" src={cart} alt="cart"/></NavLink>
                        <button className="btn" href="#!" onClick={handleClick}>Sign out</button>
                        <img className="navbar-icon" src={avatar} alt="profile" />
                    </div>
                </div>
                
            </div>
        </nav>
     );
}
 
export default Navbar;