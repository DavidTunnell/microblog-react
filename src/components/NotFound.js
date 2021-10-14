import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Uh oh...</h2>
            <p>That page can't be found.</p>
            <Link to="/">Back to the homepage</Link>
        </div>
    );
};

export default NotFound;
