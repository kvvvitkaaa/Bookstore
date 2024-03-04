import "./style.css";

import insta from "../../img/instagram.svg";
import facebook from "../../img/facebook.svg";
import twitter from "../../img/twitter.svg";

const Footer = () => {
    return ( 
    <footer className="footer">
                <ul className="socials">
                    <li><a href="https://www.instagram.com"><img className="socials-item" src={insta} alt="instagram"/></a></li>
                    <li><a href="https://www.facebook.com"><img className="socials-item" src={facebook} alt="facebook"/></a></li>
                    <li><a href="https://www.twitter.com"><img className="socials-item" src={twitter} alt="twitter"/></a></li>
                </ul>

                <p className="copyright">© Made by Alyona Kvitka, 2023 </p>
    </footer> );
}
 
export default Footer;