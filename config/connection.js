const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT || 4000,
};
