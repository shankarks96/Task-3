// Define the API URL
const apiUrl = "https://restcountries.com/v3.1/all";

// Make an HTTP GET request to the API
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Iterate over the data and print the desired information
    data.forEach((country) => {
      const name = country.name.common;
      const region = country.region;
      const subregion = country.subregion;
      const population = country.population;

      console.log(`Country: ${name}`);
      console.log(`Region: ${region}`);
      console.log(`Sub-Region: ${subregion}`);
      console.log(`Population: ${population}`);
      console.log("\n");
    });
  })
  .catch((error) => {
    console.error("There was a problem fetching the data:", error);
  });
