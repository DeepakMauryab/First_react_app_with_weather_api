import Cards from "./Cards";
import './Service.css';
const Sevices = () => {

    const cardData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <>
            <h2 className="text-center pt-4">My Services</h2>
            <div className="Service_page">
                {cardData.map((val, index) => {
                    return <Cards ind={index} key={index} />;

                })}

            </div>
        </>);
}

export default Sevices;