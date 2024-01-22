import Navbar from "../components/Navbar";

import { Outlet } from "react-router-dom";

const Layout = ({
  lightmode,
  setLightmode,
  allCountries,
  setCountryList,
  setSearchTerm,
}) => {
  return (
    <div className="layout">
      <Navbar
        lightmode={lightmode}
        setLightmode={setLightmode}
        allCountries={allCountries}
        setCountryList={setCountryList}
        setSearchTerm={setSearchTerm}
      />
      <Outlet />
    </div>
  );
};

export default Layout;
