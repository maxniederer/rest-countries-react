async function initCountryList() {
  const url =
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    // countryList.concat(json);
    // return json;

    // json.forEach((e: object) => {
    // const newCountry = document.createElement("li");
    // newCountry.classList.add("country-entry");

    // let populationStr = e.population.toLocaleString();
    // let regionStr = e.region;
    // let capitalStr = e.capital.length == 0 ? "N/A" : e.capital.join(", ");

    // document.getElementById("country-list").appendChild(newCountry);
    // });

    // const countryLinks = document.getElementsByClassName("country-link");
    // Array.from(countryLinks).forEach((e) => {
    // e.addEventListener("click", route);
    // });
  } catch (err) {
    console.error(err);
    // return null;
  }
}

function getSlug(str: string) {
  return str.toLowerCase();
}

export default initCountryList;
