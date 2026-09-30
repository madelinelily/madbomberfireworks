import { NavLink } from "react-router-dom";

var photobutton = require("./photobutton.jpg");
var servbutton = require("./servbutton.jpg");
var techbutton = require("./techbutton.jpg");
var videobutton = require("./videobutton.jpg");
var clientsbutton = require("./clientsbutton.jpg");
var contactbutton = require("./contactbutton.jpg");
var faqbutton = require("./faqbutton.jpg");

function NavFooter(){
    return (
        <div align="center">    
            <NavLink to="/gallery" activeStyle>
                <img src={photobutton} alt="Gallery" name="Image17" width="100" height="120" hspace="3" border="0"/>
            </NavLink>
            <NavLink to="/services" activeStyle>
                <img src={servbutton} alt="Services" name="Image15" width="100" height="120" hspace="3" border="0"/>
            </NavLink>
            <NavLink to="/technology" activeStyle>
                <img src={techbutton} alt="Technology" name="Image16" width="100" height="120" hspace="3" border="0"/>
            </NavLink>
            <NavLink to="/video" activeStyle>
                <img src={videobutton} alt="Video" name="Image18" width="100" height="120" hspace="3" border="0"/>
            </NavLink>
            <NavLink to="/clients" activeStyle>
                <img src={clientsbutton} alt="Clients" name="Image13" width="100" height="120" hspace="3" border="0"/>
            </NavLink>
            <NavLink to="/contact" activeStyle>
                <img src={contactbutton} alt="Contact Us" name="Image14" width="100" height="120" hspace="3" border="0"/>
            </NavLink>
            <NavLink to="/faq" activeStyle>
                <img src={faqbutton} alt="FAQ's" name="Image19" width="100" height="120" hspace="3" border="0"/>
            </NavLink>
        </div>
    );
} export default NavFooter;