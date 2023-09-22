import { useEffect, useState } from "react";

import axios from "axios";

import StocksTable from "../components/StocksTable";

const Home = () => {
    const [stocksData, setStocksData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(
                "http://localhost:3000/grouped-daily"
            );
            setStocksData(data.data.results.slice(0, 20));
        };
        fetchData();
    }, []);

    return (
        <div className="container mx-auto px-96">
            {stocksData.length > 0 && <StocksTable data={stocksData} />}
        </div>
    );
};

export default Home;
