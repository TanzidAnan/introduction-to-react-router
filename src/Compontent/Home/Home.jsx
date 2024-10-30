import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { HashLoader } from "react-spinners";

const Home = () => {
    const useNeveget =useNavigation();
    return (
        <div>
            <Header></Header>
            {
                useNeveget.state==='loading'?<HashLoader className="text-center w-5/12 mx-auto text-white my-44" />:<Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Home;