import Card from "./Card.tsx";
import initCountryList from "../data.tsx";
import SearchBar from "./SearchBar.tsx";

function SearchPage() {
  initCountryList();
  console.log("test");
  return (
    <>
      <SearchBar />
      <ul id="country-list" className="country-list centered">
        <li className="country-entry">
          <Card
            flag="https://place-hold.it/20x20"
            flagAlt="flag of country"
            country="Country Name"
            population="1000000"
            region="Region"
            capital="Capital"
          />
        </li>
      </ul>
    </>
  );
}
export default SearchPage;
