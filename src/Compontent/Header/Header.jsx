import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-11/12 mx-auto ">
            <div className="navbar bg-slate-200 text-black rounded-md shadow-xl bg-opacity-90 text-opacity-60">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <Link to='/'><li><a>Home</a></li></Link>
                        <Link to='/about'><li><a>About</a></li></Link>
                        <Link to='/users'><li><a>Users</a></li></Link>
                        <Link to='/content'><li><a>Content</a></li></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;