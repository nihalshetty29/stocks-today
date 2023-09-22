import { useEffect, useState } from "react";

import axios from "axios";

import StocksTable from "../components/StocksTable";
import Loader from "../components/Loader";

const Home = () => {
    const [stocksData, setStocksData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    console.log(isLoading);

    useEffect(() => {
        setIsLoading(true);

        const fetchData = async () => {
            const { data } = await axios.get(
                "http://localhost:3000/grouped-daily"
            );
            setStocksData(data.data.results?.slice(0, 20));
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div>
            {isLoading && <Loader />}
            {!isLoading && stocksData?.length > 0 && (
                <StocksTable data={stocksData} />
            )}
        </div>
    );
};

export default Home;
