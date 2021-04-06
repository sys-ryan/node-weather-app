const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
require("dotenv").config();

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

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

// geocode("Boston", (error, data) => {
//   console.log("error", error);
//   console.log("data", data);
// });
