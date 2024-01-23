import SearchBar from "../components/SearchBar";
import Dropdown from "../components/Dropdown";
import CountryCard from "../components/CountryCard";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";

import { useEffect, useState } from "react";

const Homepage = ({
  lightmode,
  allCountries,
  setAllCountries,
  countryList,
  setCountryList,
  searchTerm,
  setSearchTerm,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchAllCountries = async () => {
      try {
        const countries = await fetch("https://restcountries.com/v3.1/all");
        const jsonCountries = await countries.json();
        const sortedCountries = jsonCountries.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setAllCountries(sortedCountries);
        setCountryList(sortedCountries);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchAllCountries();
  }, []);

  if (loading) {
    return <LoadingPage lightmode={lightmode} />;
  }

  if (error) {
    return <ErrorPage lightmode={lightmode} />;
  }

  return (
    <div
      className="homepage"
      style={
        lightmode
          ? { backgroundColor: "var(--light)", color: "var(--black)" }
          : { backgroundColor: "var(--darkest)", color: "var(--white)" }
      }
    >
      <div className="filters-container">
        <SearchBar
          lightmode={lightmode}
          setCountryList={setCountryList}
          allCountries={allCountries}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Dropdown
          lightmode={lightmode}
          setCountryList={setCountryList}
          allCountries={allCountries}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <div className="countrys-container">
        {countryList.map((country) => {
          return (
            <CountryCard
              country={country}
              lightmode={lightmode}
              key={country.cca3}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;