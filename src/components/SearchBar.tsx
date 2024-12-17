import { SearchOutline } from "react-ionicons";

function SearchBar() {
  return (
    <>
      <div className="search-bar-wrapper centered">
        <div className="search-bar">
          <div className="search-box">
            <label className="search-icon" htmlFor="search-country-name">
              <SearchOutline
                color={"var(--color-input)"}
                title={"Search"}
                height="20px"
                width="20px"
              />
              <span className="sr-only">Search</span>
            </label>
            <input
              type="search"
              name="name"
              id="search-country-name"
              className="search-field ui-component"
              placeholder="Search for a country..."
            />
          </div>
          <select
            name="region"
            id="region-select"
            className="ui-component region-select"
          >
            <option value="" selected disabled hidden>
              Filter by Region
            </option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="antarctic">Antarctic</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
    </>
  );
}
export default SearchBar;
