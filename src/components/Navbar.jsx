import techoverLight from "../assets/techover-logo.png";
import techoverDark from "../assets/techover-logo-dark.png";
import moon from "../assets/moon.svg";
import moonBordered from "../assets/moon-bordered.svg";
import { Link } from "react-router-dom";

const Navbar = ({
  lightmode,
  setLightmode,
  allCountries,
  setCountryList,
  setSearchTerm,
}) => {
  const handleHomeClick = () => {
    setCountryList(allCountries);
    setSearchTerm("");
  };

  return (
    <div
      className="navbar"
      style={
        lightmode
          ? { backgroundColor: "var(--white)", color: "var(--black)" }
          : { backgroundColor: "var(--dark)", color: "var(--white)" }
      }
    >
      <div className="title-container">
        <Link to="/" className="title" onClick={handleHomeClick}>
          The Flag App
        </Link>
      </div>
      <div className="logo-container">
        <img
          className="logo"
          src={lightmode ? techoverDark : techoverLight}
          alt="Techover logo"
        />
      </div>
      <div className="darkmode-container">
        <div
          className="darkmode-button"
          onClick={() => setLightmode((prevMode) => !prevMode)}
        >
          <img
            className="moon"
            src={lightmode ? moonBordered : moon}
            alt="moon"
          />
          <p className="darkmode-text">Dark Mode</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;