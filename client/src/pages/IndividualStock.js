import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Loader from "../components/Loader";
import CompanyDetails from "../components/company/CompanyDetails";

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
            const { data: chartData } = await axios.get(
                `http://localhost:3000/aggregates?ticker=${tickerName}`
            );
            const { data: financialsData } = await axios.get(
                `http://localhost:3000/financials?ticker=${tickerName}`
            );

            setStockData({
                ...data.data,
                ...tickerDetails.data.results,
                chartData: chartData.data.results,
                financialsData: financialsData.data.results,
            });

            setIsLoading(false);
        };

        fetchData();
    }, [tickerName]);

    return (
        <>
            {isLoading && <Loader />}
            {!isLoading && stockData && (
                <>
                    <CompanyDetails data={stockData} />
                </>
            )}
        </>
    );
};

export default IndividualStock;
