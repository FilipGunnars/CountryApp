import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = ({lightmode, setLightmode, allCountries, setCountryList }) => {
    return (
        <div className="layout">
            <Navbar lightmode={lightmode} setLightmode={setLightmode} allCountries={allCountries} setCountryList={setCountryList} />
            <Outlet />
        </div>
    );
}
 
export default Layout;