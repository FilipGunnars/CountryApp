import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar"
import Dropdown from "./Dropdown"

const Homepage = ({lightmode, allCountries, setAllCountries, countryList, setCountryList}) => {
    
    useEffect(() => {
        const fetchAllCountries = async () => {
            const countries = await fetch('https://restcountries.com/v3.1/all');
            const jsonCountries = await countries.json();
            const sortedCountries = jsonCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
            setAllCountries(sortedCountries);
            setCountryList(sortedCountries);
        }

        fetchAllCountries();
    }, []);

    console.log(countryList)

    return (
        <div className="homepage" style={ lightmode ? {backgroundColor: "var(--light)", color: "var(--black)"} : {backgroundColor: "var(--darkest)", color: "var(--white)"}}>
            <div className="filters-container">
                <SearchBar />
                <Dropdown lightmode={lightmode} setCountryList={setCountryList} allCountries={allCountries} />
            </div>
            <div className="countrys-container">
                {countryList.map((country) => {
                        return <Link className="country-card" style={ lightmode ? {backgroundColor: "var(--white)"} : {backgroundColor: "var(--dark)"} } to={`/${country.cca3}`} key={country.cca3}>
                            <div className="flag-frame">
                                <img src={country.flags.png} alt={`flag of ${country.name.common}`} className="flag" />
                            </div>
                            <div className="country-card-info">
                                <p className="country-card-title">{country.name.common}</p>
                                <p>{`Population: ${country.population.toLocaleString('en-US')}`}</p>
                                <p>{`Region: ${country.region}`}</p>
                                <p>{`Capital: ${country.capital}`}</p>
                            </div>
                        </Link>
                })}
            </div>
        </div>
    );
}
 
export default Homepage;