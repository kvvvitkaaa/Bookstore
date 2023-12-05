import "./style.css";

import avatar from "../../img/avatar.svg";
import { NavLink } from "react-router-dom";

const Authorization = () => {
    return ( 
        <div className="container">

            <div className="column">
                <img className="avatar" src={avatar} alt="avatar" />
                <h1>Username</h1>
                <input className="form" type="text" name="username" placeholder="Enter your username.." />
                <NavLink to="/" className="btn">Sign in</NavLink>
            </div>

        </div>
     );
}
 
export default Authorization;