import Header from "../Header";
import { financialHeaders } from "./constants";

const FinancialsTable = ({ title, properties, data, dataKey }) => {
    const convertedData = data.reduce(
        (result, item) => {
            properties.forEach((property) => {
                result[property].push(item[dataKey][property]);
            });
            return result;
        },
        {
            ...properties.reduce((obj, property) => {
                obj[property] = [];
                return obj;
            }, {}),
        }
    );

    const tableData = Object.entries(convertedData).map(([_, data]) => {
        return (
            data[0] && (
                <tr className="bg-white border-b">
                    <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                        {data[0]?.label} ({data[0]?.unit})
                    </th>
                    {data[0]?.value !== undefined &&
                        data.map(({ value }) => (
                            <td className="px-6 py-4">
                                {Number(value).toLocaleString()}
                            </td>
                        ))}
                </tr>
            )
        );
    });

    return (
        <div>
            <Header title={title} />
            <div className="relative overflow-x-auto mt-6">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Particulars
                            </th>
                            {financialHeaders.map((header) => (
                                <th scope="col" className="px-6 py-3">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>{tableData}</tbody>
                </table>
            </div>
        </div>
    );
};

export default FinancialsTable;
