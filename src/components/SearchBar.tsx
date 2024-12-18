import { SearchOutline } from "react-ionicons";

function SearchBar() {
  const select: HTMLSelectElement = document.getElementById(
    "region-select"
  ) as HTMLSelectElement;
  const allCountries = document.getElementsByClassName("country-entry");
  const regionArray = [
    document.getElementsByClassName("africa"),
    document.getElementsByClassName("americas"),
    document.getElementsByClassName("antarctic"),
    document.getElementsByClassName("asia"),
    document.getElementsByClassName("europe"),
    document.getElementsByClassName("oceania"),
  ];

  function hideAllCountries() {
    Array.from(allCountries).forEach((element) => {
      element.classList.add("hidden");
    });
  }

  function updateRegionFilter() {
    hideAllCountries();
    Array.from(regionArray[select.selectedIndex - 1]).forEach((element) => {
      element.classList.remove("hidden");
    });
  }

  const search: HTMLInputElement = document.getElementById(
    "search-country-name"
  ) as HTMLInputElement;
  search.addEventListener("keypress", (e) => {
    updateSearchFilter(e);
  });

  function updateSearchFilter(event: KeyboardEvent) {
    if (event.key == "Enter") {
      hideAllCountries();
      Array.from(allCountries).forEach((element) => {
        let countryNameHeading = element.childNodes[0].childNodes[1]
          .childNodes[0] as HTMLElement;
        let countryName = countryNameHeading.innerHTML.toLowerCase();
        if (countryName.includes(search.value.toLowerCase())) {
          element.classList.remove("hidden");
        }
      });
    }
  }

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
            onChange={updateRegionFilter}
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
