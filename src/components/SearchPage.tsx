import { useState, useEffect } from "react";
import Card from "./Card.tsx";
import SearchBar from "./SearchBar.tsx";
// import initCountryList from "../data.tsx";

const url =
  "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region";

interface Country {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  region: string;
  population: number;
}

async function fetchApi(): Promise<Country[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  const json = await response.json();
  // console.log("json", json);
  return json;

  // try {
  //   const response = await fetch(url);
  //   if (!response.ok) {
  //     throw new Error(`${response.status}`);
  //   }
  //   const json = await response.json();
  //   console.log(json);
  // }
  // catch(err) {
  //   console.log(err);
  // }
}

function SearchPage() {
  const [countryList, setCountryList] = useState<Country[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchApi();
        setCountryList(data);
        console.log(countryList);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <>
      <SearchBar />
      <ul id="country-list" className="country-list centered">
        {countryList.map((country, index) => (
          <li
            className={"country-entry " + country.region.toLowerCase()}
            key={country.name.common}
          >
            <Card
              flag={country.flags.png}
              flagAlt={country.flags.alt}
              country={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
export default SearchPage;
