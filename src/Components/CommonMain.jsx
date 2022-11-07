import './CommonMain.css';


const CommonMain= (props)=>{

    return(<>
    <div className="homeData">
        <div className="intro">
        <h3>{props.title} <br/><span> {props.name}</span></h3>
        <p>{props.desciption}</p>
        <button>{props.buttonData}</button>
        </div>
        <div className="imageBox">
            <img src={props.imagesrc} alt="main" className='img-fluid'/>
        </div>
        </div>
    </>);
}

export default CommonMain;