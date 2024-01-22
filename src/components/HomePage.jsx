import SearchBar from "./SearchBar"
import Dropdown from "./Dropdown"
import CountryCard from "./CountryCard";

import { useEffect, useState } from "react";

const Homepage = ({lightmode, allCountries, setAllCountries, countryList, setCountryList}) => {
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllCountries = async () => {
            const countries = await fetch('https://restcountries.com/v3.1/all');
            const jsonCountries = await countries.json();
            const sortedCountries = jsonCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
            setAllCountries(sortedCountries);
            setCountryList(sortedCountries);
            setLoading(false);
        }

        fetchAllCountries();
    }, []);

    if (loading) {
        return <div className="loading-text">Loading...</div>
    }

    return (
        <div className="homepage" style={ lightmode ? {backgroundColor: "var(--light)", color: "var(--black)"} : {backgroundColor: "var(--darkest)", color: "var(--white)"}}>
            <div className="filters-container">
                <SearchBar lightmode={lightmode} setCountryList={setCountryList} allCountries={allCountries}/>
                <Dropdown lightmode={lightmode} setCountryList={setCountryList} allCountries={allCountries} />
            </div>
            <div className="countrys-container">
                {countryList.map((country) => {
                    return <CountryCard country={country} lightmode={lightmode} key={country.cca3}/>
                })}
            </div>
        </div>
    );
}
 
export default Homepage;