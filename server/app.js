/*

REST (Representational State Transfer)

API

GET /users => List of users
POST /users => Add a user
DELETE /user/1 => Delete a user

function func() {
    return "fsdlfjsd"
}

const func = () => {
    return "fsdlfjsd"
}

*/

const express = require("express");
const cors = require("cors");

const api = require("./api");

const app = express();

const getYesterdayDate = () => {
    const inputDate = new Date(Date.now());
    inputDate.setDate(inputDate.getDate() - 2);
    const year = inputDate.getUTCFullYear();
    const month = String(inputDate.getUTCMonth() + 1).padStart(2, "0");
    const day = String(inputDate.getUTCDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
};

app.use(cors());

app.get("/ticker-daily", async (req, res) => {
    const { ticker, date } = req.query;

    try {
        const { data } = await api.get(`/v1/open-close/${ticker}/${date}`);
        res.status(200).json({ message: "Data fetched successfully", data });
    } catch (err) {
        res.status(404).json({ message: "An error occured", err });
    }
});

app.get("/grouped-daily", async (req, res) => {
    const date = getYesterdayDate();

    try {
        const { data } = await api.get(
            `/v2/aggs/grouped/locale/us/market/stocks/${date}`
        );
        res.status(200).json({ message: "Data fetched successfully", data });
    } catch (err) {
        res.status(404).json({ message: "An error occured", err });
    }
});

app.listen(3000, () => {
    console.log("Running of port 3000");
});
