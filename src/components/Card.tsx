interface Props {
  flag: string;
  flagAlt: string;
  country: string;
  population: string;
  region: string;
  capital: string;
}

function Card({ flag, flagAlt, country, population, region, capital }: Props) {
  return (
    <>
      <a href="#" className="country-link">
        <img src={flag} className="country-flag" alt={flagAlt} />
        <div className="country-desc">
          <h2>{country}</h2>
          <ul className="country-stats">
            <li>
              <strong>Population: </strong>
              {population}
            </li>
            <li>
              <strong>Region: </strong>
              {region}
            </li>
            <li>
              <strong>Capital: </strong>
              {capital}
            </li>
          </ul>
        </div>
      </a>
    </>
  );
}

export default Card;
