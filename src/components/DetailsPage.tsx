import { useState, useEffect } from "react";
import { ArrowBackOutline } from "react-ionicons";
import { useParams } from "react-router";
import { Link } from "react-router";
import BorderList from "./BorderList.tsx";

const baseUrl: string = `https://restcountries.com/v3.1/name/`;

interface CountryDetails {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      official: string;
      common: string;
    }[];
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld?: string[];
  currencies?: {
    name: string;
    symbol: string;
  }[];
  languages?: string[];
  borders?: string[];
}

async function fetchApi(str: string): Promise<CountryDetails[]> {
  const url: string = baseUrl.concat(str);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  const json = await response.json();
  return json;
}

function DetailsPage() {
  const [countryDetails, setCountryDetails] = useState<CountryDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchApi(params.countryId!);
        setCountryDetails(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  function getNativeNameString(data: CountryDetails): string {
    if (data.name.nativeName.length == 0) return "N/A";
    let stringList = [],
      i = 0;
    for (var x in data.name.nativeName) {
      stringList[i] = data.name.nativeName[x].official;
      i++;
    }
    return stringList.join(", ");
  }

  function getLanguagesString(data: CountryDetails): string {
    if (data.languages!.length == 0) return "N/A";
    let stringList = [],
      i = 0;
    for (var x in data.languages!) {
      stringList[i] = data.languages![x];
      i++;
    }
    return stringList.join(", ");
  }

  function getCurrenciesString(data: CountryDetails): string {
    if (data.currencies!.length == 0) return "N/A";
    let stringList = [],
      i = 0;
    for (var x in data.currencies!) {
      data.currencies![x].symbol
        ? (stringList[i] =
            data.currencies![x].name + ` (${data.currencies![x].symbol})`)
        : (stringList[i] = data.currencies![x].name);
      i++;
    }
    return stringList.join(", ");
  }

  return (
    <>
      <div className="centered">
        <Link to="/" className="btn ui-component back-btn">
          <ArrowBackOutline
            color={"#00000"}
            title={"Back"}
            height="16px"
            width="16px"
          />
          Back
        </Link>
        <div className="details-holder">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <img
                className=""
                src={countryDetails[0].flags.png}
                alt={countryDetails[0].flags.alt}
              />
              <div className="country-information">
                <h1>{countryDetails[0].name.common}</h1>
                <div className="country-details">
                  <ul>
                    <li>
                      <strong>Native Name: </strong>
                      {getNativeNameString(countryDetails[0])}
                    </li>
                    <li>
                      <strong>Population: </strong>
                      {countryDetails[0].population.toLocaleString()}
                    </li>
                    <li>
                      <strong>Region: </strong>
                      {countryDetails[0].region}
                    </li>
                    <li>
                      <strong>Sub-Region: </strong>
                      {!countryDetails[0].subregion
                        ? "N/A"
                        : countryDetails[0].subregion}
                    </li>
                    <li>
                      <strong>Capital: </strong>
                      {countryDetails[0].capital.length == 0
                        ? "N/A"
                        : countryDetails[0].capital.join(", ")}
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <strong>Top Level Domain: </strong>
                      {countryDetails[0].tld!.length == 0
                        ? "N/A"
                        : countryDetails[0].tld!.join(", ")}
                    </li>
                    <li>
                      <strong>Currencies: </strong>
                      {getCurrenciesString(countryDetails[0])}
                    </li>
                    <li>
                      <strong>Languages: </strong>
                      {getLanguagesString(countryDetails[0])}
                    </li>
                  </ul>
                </div>
                <div className="neighbors">
                  <strong>Border Countries: </strong>
                  <BorderList borders={countryDetails[0].borders!} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default DetailsPage;
