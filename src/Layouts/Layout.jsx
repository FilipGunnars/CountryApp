import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = ({lightmode, SetLightmode}) => {
    return (
        <div className="layout">
            <Navbar lightmode={lightmode} SetLightmode={SetLightmode} />
            <Outlet />
        </div>
    );
}
 
export default Layout;