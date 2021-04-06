const request = require("request");
require("dotenv").config();

const weatherstack_api_key = process.env.WEATHERSTACK_API_KEY;
const weatherstack_url = `http://api.weatherstack.com/current?access_key=${weatherstack_api_key}&query=37.8267,-122.4233`;

request({ url: weatherstack_url, json: true }, (error, response) => {
  // const data = JSON.parse(response.body);
  const data = response.body; // { json: true }
  const current = response.body.current;
  const message = `${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees out.
    It feels like ${current.feelslike} degrees out.`;

  console.log(message);
});

//

// const mapbox_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/Washington.json?limit=1&access_token=${process.env.MAPBOX_API_KEY}`;
// request({ url: mapbox_url, json: true }, (error, response) => {
//   const latitude = response.body.features[0].center[1];
//   const longitude = response.body.features[0].center[0];
//   console.log(latitude, longitude);
// });
