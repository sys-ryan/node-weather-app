const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const weatherstack_api_key = process.env.WEATHERSTACK_API_KEY;
  const weatherstack_url = `http://api.weatherstack.com/current?access_key=${weatherstack_api_key}&query=37.8267,-122.4233`;

  request({ url: weatherstack_url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location");
    } else {
      const current = body.current;
      const message = `${current.weather_descriptions[0]}. Iti s currently ${current.temperature} degrees out.
      It feels like ${current.feelslike} degrees out.`;
      callback(undefined, message);
    }
  });
};

module.exports = forecast;
