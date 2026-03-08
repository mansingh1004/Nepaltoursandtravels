import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AIChatbot from "./components/AIChatbot";


const Layout=()=>{
    return(<>
    <Navbar/>
    
    <Outlet/>
    
    <Footer/>
    <AIChatbot/>
    </>)
}


export default Layout;