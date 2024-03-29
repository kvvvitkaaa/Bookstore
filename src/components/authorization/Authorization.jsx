import "./style.css";

import avatar from "../../img/avatar.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Authorization = () => {

    const [username, setUsername] = useState('');
    const navigation = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username !== '' && (username.length > 4 || username.length < 16) ) {
            navigation('/');
            localStorage.setItem('username', JSON.stringify(username));
        }
    }

    const handleInput = (e) => {
        setUsername(e.target.value.trim());
    }


    return ( 
        <div className="container">

            <div className="column">
                <img className="avatar" src={avatar} alt="avatar" />
                <form className="signin-form" onSubmit={handleSubmit} autoComplete="on">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        className="form" 
                        type="text" 
                        name="username" 
                        placeholder="Enter your username.." 
                        aria-describedby="user-email"
                        aria-invalid="false"
                        onInput={(e) => e.target.value = e.target.value.replace(/[^a-zA-Z]/g, '')}
                        onChange={handleInput}
                    />
                    <div className="form-info"><p>Your name must be in Latin and be between 4 and 16 characters long.</p></div>
                    <button className="btn btn-submit" disabled={username.length < 4 || username.length > 16}>Sign in</button>
                </form>
            </div>

        </div>
     );
}
 
export default Authorization;