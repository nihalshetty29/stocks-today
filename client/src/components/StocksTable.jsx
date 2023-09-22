import { useHistory } from "react-router-dom";

const StocksTable = ({ data }) => {
    const history = useHistory();

    const handleClick = (ticker) => {
        history.push(`/ticker/${ticker.T}`);
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 text-center">
                <thead className="text-s text-gray-700 uppercase bg-slate-300">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Ticker
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((ticker) => (
                        <tr
                            className="bg-white border-b hover:bg-slate-100 bg-slate-200 cursor-pointer"
                            onClick={() => handleClick(ticker)}
                            key={ticker.T}
                        >
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                                {ticker.T}
                            </th>
                            <td className="px-6 py-4">{ticker.c}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StocksTable;
