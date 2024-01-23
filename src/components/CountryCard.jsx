import { Link } from "react-router-dom";

const CountryCard = ({ country, lightmode }) => {
  return (
    <Link
      className="country-card"
      style={
        lightmode
          ? { backgroundColor: "var(--white)" }
          : { backgroundColor: "var(--dark)" }
      }
      to={`/${country.cca3}`}
    >
      <div className="country-card-flag-frame">
        <img
          src={country.flags.png}
          alt={`flag of ${country.name.common}`}
          className="country-card-flag"
        />
      </div>
      <div className="country-card-info">
        <p className="country-card-title">{country.name.common}</p>
        <div className="country-card-data-container">
          <p className="country-card-data-property">Population:</p>
          <p>{country.population.toLocaleString("en-US")}</p>
        </div>
        <div className="country-card-data-container">
          <p className="country-card-data-property">Region:</p>
          <p>{country.region}</p>
        </div>
        <div className="country-card-data-container">
          <p className="country-card-data-property">Capital:</p>
          <p>{country.capital}</p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;