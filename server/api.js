const axios = require("axios");

const api = axios.create({
    baseURL: "https://api.polygon.io",
    headers: {
        Authorization: `Bearer wJtsJ4jukIe0BZomBt8ODFHVffk6l_4o`,
    },
});

module.exports = api;
