import main from '../assets/main.jpg';

const Cards = () => {
  return (<>
    <div className="card " style={{ width: "18rem" }}>
      <img src={main} className="card-img-top " alt="card" />
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </>);
}

export default Cards;
