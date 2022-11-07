import CommonMain from './CommonMain';
import main from '../assets/main.jpg';


const Home= ()=>{

    return(<>
    <CommonMain title= "Welcome To My React Website" 
      name= "React Demo" 
      desciption= "We are hiring React Developer" 
      buttonData= "Get Started" 
      imagesrc={main}
      />
    </>);
}

export default Home;