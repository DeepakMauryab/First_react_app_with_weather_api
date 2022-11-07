import CommonMain from './CommonMain';
import about from '../assets/about.jpg';

const About= ()=>{

    return(<>
    <CommonMain title= "There are many Services"
      name= "About page"
      desciption= "This is a Tech Company"
      buttonData= "Many More" 
      imagesrc={about}
      />
    </>);
}

export default About;