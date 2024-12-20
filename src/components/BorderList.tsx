import { useState, useEffect } from "react";

interface Props {
  borders: string[];
}

interface Name {
  name: {
    common: string;
    official: string;
    nativeName: {
      official: string;
      common: string;
    }[];
  };
}

async function getCountryNameFromCode(list: string[]): Promise<string[]> {
  const finalList: string[] = [];
  for (var ind in list) {
    const url = `https://restcountries.com/v3.1/alpha/${list[ind]}?fields=name`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const json: Name = await response.json();
    finalList.push(json.name.common);
  }
  return finalList;
}

function BorderList({ borders }: Props) {
  const [loading, setLoading] = useState(false);
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    async function getData() {
      if (!borders) return;
      try {
        const data: string[] = await getCountryNameFromCode(borders);
        setNames(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <>
      <ul className="neighbor-list">
        {loading ? (
          <li className="no-neighbor">Loading...</li>
        ) : (
          <>
            {!names || names.length == 0 ? (
              <li className="no-neighbor">N/A</li>
            ) : (
              names.map((country) => (
                <li key={country}>
                  <a
                    href={"/details/" + country.toLowerCase()}
                    className="btn ui-component neighbor-btn"
                  >
                    {country}
                  </a>
                </li>
              ))
            )}
          </>
        )}
      </ul>
    </>
  );
}

export default BorderList;
