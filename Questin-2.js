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
    // Iterate over the data and log the flags to the console
    data.forEach((country) => {
      if (country.flags && country.flags.svg) {
        console.log(`Country: ${country.name.common}`);
        console.log(`Flag URL: ${country.flags.svg}`);
        console.log("\n");
      }
    });
  })
  .catch((error) => {
    console.error("There was a problem fetching the data:", error);
  });
