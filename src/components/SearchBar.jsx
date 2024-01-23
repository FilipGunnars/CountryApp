const SearchBar = ({
  lightmode,
  setCountryList,
  allCountries,
  searchTerm,
  setSearchTerm,
}) => {
  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    const filteredCountries = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(newSearchTerm.toLowerCase())
    );

    setCountryList(filteredCountries);
  };

  return (
    <input
      className="searchbar"
      placeholder="Search for a country..."
      style={
        lightmode
          ? { backgroundColor: "var(--white)" }
          : { backgroundColor: "var(--dark)" }
      }
      value={searchTerm}
      onChange={handleInputChange}
      id="searchbar"
    />
  );
};

export default SearchBar;