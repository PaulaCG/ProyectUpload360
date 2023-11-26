require('dotenv').config();

const config = {
    MONGO_URI: process.env.PAULA_DB
};

module.exports = config;
