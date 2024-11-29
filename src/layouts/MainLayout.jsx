import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
        <div>
           <div className="w-[90%] mx-auto">
           <Navbar> </Navbar>
           </div>
           <div className="min-h-[calc(100vh-136px)] my-10 w-[90%] mx-auto">
           <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;


