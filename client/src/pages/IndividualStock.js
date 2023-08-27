import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const IndividualStock = () => {
    const { tickerName } = useParams();

    const [stockData, setStockData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        const fetchData = async () => {
            const { data } = await axios.get(
                `http://localhost:3000/ticker-daily?ticker=${tickerName}&date=2023-08-25`
            );
            const { data: tickerDetails } = await axios.get(
                `http://localhost:3000/ticker-details?ticker=${tickerName}`
            );

            setStockData({
                ...data.data,
                ...tickerDetails.data.results,
            });

            console.log(stockData);

            setIsLoading(false);
        };

        fetchData();
    }, []);

    return <div>{tickerName}</div>;
};

export default IndividualStock;
