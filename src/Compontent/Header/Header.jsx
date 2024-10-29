import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>Navber</h1>
            <ul className="flex justify-between gap-24">
                <Link className="ml-5 mr-6" to="/">Home</Link>
                <Link to='/user'>User</Link>
                <Link className="ml-5 mr-6" to="/about">About</Link>
                <Link className="ml-5 mr-6" to="/content">Content</Link>
            </ul>
        </div>
    );
};

export default Header;