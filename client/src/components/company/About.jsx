import Header from "../Header";

const About = ({ ticker, description, phoneNumber, url }) => {
    return (
        <div>
            <Header title={`About ${ticker}`} />
            <p className="text-justify my-2">{description}</p>
            {url && (
                <p className="">
                    Website:{" "}
                    <a
                        className="text-blue-600 hover:underline"
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {url}
                    </a>
                </p>
            )}
            {phoneNumber && <p>Phone: {phoneNumber}</p>}
        </div>
    );
};

export default About;
