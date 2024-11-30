// write this code with promise .then() and .catch()

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city} -- ${data.country}`);

      return fetch(`https://restcountries.eu/v2/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with country data: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data, "$$$$$$$$$$$$");
    })
    .catch((err) => console.error(`${err.message} !!!`));
};

// write promise with async await
async function whereAmI(lat, lng) {
  try {
    const geoRes = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!geoRes.ok) throw new Error(`Problem with geocoding: ${geoRes.status}`);
    const geoData = await geoRes.json();
    console.log(`You are in ${geoData.city} -- ${geoData.country}`);

    const countryRes = await fetch(
      `https://restcountries.eu/v2/name/${geoData.country}`
    );
    if (!countryRes.ok)
      throw new Error(`Problem with country data: ${countryRes.status}`);
    const countryData = await countryRes.json();
    console.log(countryData, "$$$$$$$$$$$$");
  } catch (error) {
    console.error(`${error.message}`);
  }
}

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
