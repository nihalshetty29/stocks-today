import { Tooltip, AreaChart, Area, YAxis } from "recharts";

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`$${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};

const Chart = ({ data }) => {
    const minC = data.reduce((min, currentValue) => {
        return currentValue?.c < min?.c ? currentValue?.c : min?.c;
    }, 0);
    const maxC = data.reduce((max, currentValue) => {
        return currentValue?.c > max?.c ? currentValue?.c : max?.c;
    }, 0);

    return (
        <div className="flex justify-center">
            <AreaChart
                width={800}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <YAxis type="number" domain={[minC, maxC]} hide={true} />
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="#8884d8"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="95%"
                            stopColor="#8884d8"
                            stopOpacity={0}
                        />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="#82ca9d"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="95%"
                            stopColor="#82ca9d"
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>
                <Area
                    type="linear"
                    dataKey="c"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                />
                <Tooltip content={<CustomTooltip />} />
            </AreaChart>
        </div>
    );
};

export default Chart;
