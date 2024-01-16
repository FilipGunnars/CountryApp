import { useState } from 'react';
import arrowDownDark from '../assets/arrow-down-dark.svg'
import arrowDownLight from '../assets/arrow-down-light.svg'

const Dropdown = ({lightmode}) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    
    const toggleDropdown = () => {
        setDropdownVisible((prev) => !prev);
    }

    return (
        <div className="region-filter-container" style={ lightmode ? {backgroundColor: "var(--white)"} : {backgroundColor: "var(--dark)"} } onClick={toggleDropdown}>
            <p>Filter by Region</p>
            <img src={ lightmode ? arrowDownDark : arrowDownLight } alt="" />
            <div className={`dropdown-list ${dropdownVisible ? 'visible' : ''}`}>
                <p className='dropdown-item'>Africa</p>
                <p className='dropdown-item'>America</p>
                <p className='dropdown-item'>Asia</p>
                <p className='dropdown-item'>Europe</p>
            </div>
        </div>
    );
}
 
export default Dropdown