const Header = ({ name, branding, price }) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-start gap-4">
                {branding?.icon_url && (
                    <img
                        src={`${branding?.icon_url}?apiKey=wJtsJ4jukIe0BZomBt8ODFHVffk6l_4o`}
                        alt={name}
                        className="h-10"
                    />
                )}
                <h1 className="text-3xl font-semibold whitespace-nowrap">
                    {name}
                </h1>
            </div>
            <div>
                <span className="text-2xl font-bold whitespace-nowrap">
                    ${price}
                </span>
            </div>
        </div>
    );
};

export default Header;
