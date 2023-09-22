import CompanyHeader from "./Header";
import About from "./About";
import HighLow from "./HighLow";
import Header from "../Header";
import Chart from "../Chart";
import FinancialsTable from "./FinancialsTable";

import { financialTables } from "./constants";

const CompanyDetails = ({ data }) => {
    const {
        name,
        branding,
        close,
        description,
        address,
        ticker,
        phone_number,
        homepage_url,
        high,
        low,
        chartData,
        financialsData,
    } = data;

    const transformedData = financialsData
        ?.slice(0, 4)
        .map(({ financials }) => financials);
    console.log(transformedData);

    return (
        <div className="flex flex-col gap-8">
            <CompanyHeader name={name} branding={branding} price={close} />
            <Header title="Overview" />
            <HighLow high={high} low={low} close={close} />
            <Chart data={chartData} />
            <About
                ticker={ticker}
                description={description}
                address={address}
                phoneNumber={phone_number}
                url={homepage_url}
            />
            {financialTables.map(({ title, properties, dataKey }) => (
                <FinancialsTable
                    title={title}
                    properties={properties}
                    data={transformedData}
                    dataKey={dataKey}
                />
            ))}
        </div>
    );
};

export default CompanyDetails;
