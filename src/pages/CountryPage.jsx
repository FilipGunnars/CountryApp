import arrowLeft from "../assets/arrow-left.svg";
import arrowLeftDark from "../assets/arrow-left-dark.svg";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const CountryPage = ({ lightmode, allCountries, setSearchTerm }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState();

  useEffect(() => {
    const fetchCountryInfo = async () => {
      const country = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
      const jsonCountry = await country.json();
      setCountry(jsonCountry[0]);
      setLoading(false);
    };

    fetchCountryInfo();
  }, [id]);

  if (loading) {
    return (
      <div className="loader-page">
        <div className="loader"></div>
      </div>
    );
  }

  const borderCountries = country.borders;

  return (
    <div
      className="countrypage"
      style={
        lightmode
          ? { backgroundColor: "var(--light)", color: "var(--black)" }
          : { backgroundColor: "var(--darkest)", color: "var(--white)" }
      }
    >
      <Link className="back-button" to="/" onClick={() => setSearchTerm("")}>
        <img src={lightmode ? arrowLeftDark : arrowLeft} alt="" />
        <p>Back</p>
      </Link>
      <div className="country-details-container">
        <div className="country-details-flag-frame">
          <img
            src={country.flags.png}
            alt={`flag of ${country.name.common}`}
            className="country-details-flag"
          />
        </div>
        <div className="country-detail-text-container">
          <p className="country-details-title">{country.name.common} </p>
          <div className="country-data-container">
            <div>
              <div className="data-container">
                <p className="country-details-property">Population:</p>
                <p>{country.population.toLocaleString("en-US")}</p>
              </div>
              <div className="data-container">
                <p className="country-details-property">Region:</p>
                <p>{country.region}</p>
              </div>
              <div className="data-container">
                <p className="country-details-property">Capital:</p>
                <p>{country.capital ? country.capital : "Undefined"}</p>
              </div>
              <div className="data-container">
                <p className="country-details-property">Native name:</p>
                <p>
                  {country.name.nativeName
                    ? country.name.nativeName[
                        Object.keys(country.name.nativeName)[0]
                      ].common
                    : "Undefined"}
                </p>
              </div>
            </div>
            <div>
              <div className="data-container">
                <p className="country-details-property">Top Level Domain:</p>
                <p>{country.tld ? country.tld[0] : "Undefined"}</p>
              </div>
              <div className="data-container">
                <p className="country-details-property">Currencies:</p>
                <p>
                  {country.currencies
                    ? Object.keys(country.currencies)[0]
                    : "Undefined"}
                </p>
              </div>
              <div className="data-container">
                <p className="country-details-property">Language:</p>
                <p>
                  {country.languages
                    ? country.languages[Object.keys(country.languages)[0]]
                    : "Undefined"}
                </p>
              </div>
            </div>
          </div>
          <div className="border-countries-container">
            <p className="border-countries-title">Border Countries:</p>
            {borderCountries &&
              borderCountries.map((borderCountryCode) => {
                const borderCountry = allCountries.find(
                  (country) => country.cca3 === borderCountryCode
                );
                return (
                  <Link
                    className="border-country-chip"
                    to={`/${borderCountryCode}`}
                    key={borderCountryCode}
                    style={
                      lightmode
                        ? { backgroundColor: "var(--white)" }
                        : { backgroundColor: "var(--dark)" }
                    }
                  >
                    {borderCountry
                      ? borderCountry.name.common
                      : borderCountryCode}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
