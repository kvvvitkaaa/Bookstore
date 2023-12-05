import gif from "../img/error.gif";

const Page404 = () => {
    return (
        <div className="container main">

            <div className="error-wrapper">
                <h1>404 Error</h1>
                <img src={gif} alt=""/>
                <h2>Ooops! Looks like the page is missing..</h2>
                <button className="btn-error">Take me to homepage</button>
            </div>
            
        </div>
      );
}
 
export default Page404;