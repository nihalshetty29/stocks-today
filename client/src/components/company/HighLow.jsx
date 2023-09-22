const HL = ({ title, value }) => {
    return (
        <div className="flex flex-col items-center">
            <span className="font-light text-s">{title}</span>
            <span className="font-medium text-l">${value.toFixed(2)}</span>
        </div>
    );
};

const HighLow = ({ high, low, close }) => {
    return (
        <div className="flex items-center gap-8">
            <HL title="Low" value={low} />
            <input
                id="minmax-range"
                type="range"
                min={low * 100}
                max={high * 100}
                defaultValue={close * 100}
                disabled={true}
                className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider`}
            />
            <HL title="High" value={high} />
        </div>
    );
};

export default HighLow;
