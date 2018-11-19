const result = require('dotenv').config();
if (result.error) {
  throw result.error
}

const config = {
  app: {
    port: parseInt(process.env.PORT) || 3000,
    tokenSecret: process.env.TOKEN_SECRET,
    weatherApiUri: 'https://api.darksky.net/forecast',
    weatherApiKey: process.env.WEATHER_API_KEY
  },
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 27017,
    name: process.env.DB_NAME || 'muega-calendar-db'
  }
};

module.exports = config;