import { useState } from 'react';
import arrowDownDark from '../assets/arrow-down-dark.svg'
import arrowDownLight from '../assets/arrow-down-light.svg'

const Dropdown = ({lightmode, allCountries, setCountryList}) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    
    const toggleDropdown = () => {
        setDropdownVisible((prev) => !prev);
    }

    const sortByRegion = (region) => {
        const filteredList = allCountries.filter((country) => country.region == region );
        setCountryList(filteredList);
    }

    return (
        <div className="region-filter-container" style={ lightmode ? {backgroundColor: "var(--white)"} : {backgroundColor: "var(--dark)"} } onClick={toggleDropdown}>
            <p>Filter by Region</p>
            <img src={ lightmode ? arrowDownDark : arrowDownLight } alt="Arrow down" />
            <div className={`dropdown-list ${dropdownVisible ? 'visible' : ''}`}>
                <p className='dropdown-item' onClick={()=>{sortByRegion("Africa")}} >Africa</p>
                <p className='dropdown-item' onClick={()=>{sortByRegion("Americas")}}>America</p>
                <p className='dropdown-item' onClick={()=>{sortByRegion("Asia")}}>Asia</p>
                <p className='dropdown-item' onClick={()=>{sortByRegion("Europe")}}>Europe</p>
            </div>
        </div>
    );
}
 
export default Dropdown