import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <h1>Micro Blog</h1>
            </Link>
            <div className="links">
                {/* use Link from react-router-dom so that react handles routes only in the browser client side and prevent the need to hit the server repeatedly 
                The Link tag pevents an anchor tags call to the server and reroutes it with a react route*/}
                <Link to="/">Home</Link>
                <Link
                    to="/create"
                    style={{
                        color: "white",
                        backgroundColor: "#f1356d",
                        borderRadius: "8px",
                    }}
                >
                    New Blog
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
