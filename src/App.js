import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Gallery from './Gallery';
import Home from './Home';
import Services from './Services';
import Technology from './Technology';
import Video from './Video';
import Clients from './Clients';
import Contact from './Contact';
import Faq from './Faq';
function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route path="/gallery" element={<Gallery/>}></Route>   
      <Route path="/services" element={<Services/>}></Route>  
      <Route path="/technology" element={<Technology/>}></Route>  
      <Route path="/video" element={<Video/>}></Route>  
      <Route path="/clients" element={<Clients/>}></Route>  
      <Route path="/contact" element={<Contact/>}></Route>  
      <Route path="/faq" element={<Faq/>}></Route>  
    </Routes> 
</Router>
      
  );
}

export default App;
