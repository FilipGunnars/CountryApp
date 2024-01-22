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
        <p>{`Population: ${country.population.toLocaleString("en-US")}`}</p>
        <p>{`Region: ${country.region}`}</p>
        <p>{`Capital: ${country.capital}`}</p>
      </div>
    </Link>
  );
};

export default CountryCard;
