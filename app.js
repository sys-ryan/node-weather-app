const request = require("request");
const geocode = require("./utils/geocode");
require("dotenv").config();

const weatherstack_api_key = process.env.WEATHERSTACK_API_KEY;
const weatherstack_url = `http://api.weatherstack.com/current?access_key=${weatherstack_api_key}&query=37.8267,-122.4233`;

// request({ url: weatherstack_url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     // const data = JSON.parse(response.body);
//     const data = response.body; // { json: true }
//     const current = response.body.current;
//     const message = `${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees out.
//       It feels like ${current.feelslike} degrees out.`;
//     console.log(message);
//   }
// });

geocode("Boston", (error, data) => {
  console.log("error", error);
  console.log("data", data);
});
