import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>This is the home compontent</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;