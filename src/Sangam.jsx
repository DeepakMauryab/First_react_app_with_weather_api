import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Sevices from "./Components/Sevices";
import Error from "./Components/Error";
import About from "./Components/About";
import Weather from "./Components/Weather";
import News from "./Components/news/News";


const Sangam= ()=>{
  return(<>
    <Navbar />
    <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/about" element={ <About />} />
        <Route path="/service" element={ <Sevices/>} />
        <Route path="/Contact" element={ <Contact/>} />
        <Route path="/weather" element={ <Weather/>} />
        <Route path="/news" element={ <News/>} />
        <Route path="*" element={ <Error/>} />
    </Routes>
    
  </>);
}

export default Sangam;