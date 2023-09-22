const axios = require("axios");

const api = axios.create({
    baseURL: "https://api.polygon.io",
    headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
});

module.exports = api;
