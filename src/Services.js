import NavFooter from "./NavFooter";
import { NavLink } from "react-router-dom";
var blank = require("./blank.gif");
var servicebanner = require("./servicebanner.jpg");
var fw01 = require("./fw01.jpg");

function Services() {
    return (<div>
            <table width="800" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#333333">
                <tr bgcolor="#656565">
                    <td height="1" colspan="7" valign="top"><div align="center"><img src={blank} width="100" height="3"/></div>
                    </td>
                </tr>
                <tr>
                <td width="1" rowspan="12" valign="top" bgcolor="#666666">&nbsp;</td>
                <td height="144" colspan="6" valign="bottom" bgcolor="#000000"><div align="center"><img src={blank} width="771" height="15" border="0"/><br/>
                <NavLink to="/"><img src={servicebanner} width="770" height="130" border="0"/></NavLink></div>       
                </td>
                </tr>
                <tr bgcolor="E54C00">
                <td height="12" colspan="6" valign="top" bgcolor="#000000"><div align="center"><img src="hline.jpg" width="650" height="1"/></div></td>
                </tr>
            <tr bgcolor="E54C00">
                <td height="29" colspan="6" valign="top" bgcolor="#000000"><div align="center"></div>      <div align="center"><font size="3"><em><font color="#FF0000"><strong><font face="Verdana, Arial, Helvetica, sans-serif">We
                make every show a work of art.</font></strong></font></em></font></div></td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="12" colspan="6" valign="top" bgcolor="#000000"><div align="center"><font size="3"><em><font color="#FF0000"><img src="hline.jpg" width="650" height="1"/></font></em></font></div></td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="19" colspan="6" bgcolor="#000000"><div align="center"></div></td>
            </tr>
            <tr bgcolor="E54C00">
                <td width="63" bgcolor="#000000"><div align="left"><img src={blank} width="70" height="12"/></div></td>
                <td bgcolor="#000000"><div align="center"></div>      
                <div align="center"><font color="#CCCCCC" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>Grand
                    Openings<br/>
                    Weddings<br/>
                    Holidays<br/>
                    Fairs<br/>
                    Festivals<br/>
                    Conventions<br/>
                    Graduations<br/>
                    Conferences<br/>
                    Athletic Events<br/>
                    Homecomings</strong><br/>
                </font></div></td>
                <td bgcolor="#000000"><div align="center"><img src={fw01} width="175" height="178"/></div></td>
                <td height="111" colspan="2" bgcolor="#000000"><div align="center"><font color="#AC0605" size="2" face="Verdana, Arial, Helvetica, sans-serif"></font></div>      
                <div align="left"><font color="#CCCCCC" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>Mad
                Bomber is not just another fireworks company. Over 17+ years of experience,
                proven techniques and advanced technology, we excel in creating shows
                that keep your spectators excited. <br/>
                <br/>
                From custom music, choreography, set pieces, electrically or manually fired
                shows, land or barge displays, there is nothing we cannot do for you.</strong></font></div></td>
                <td width="51" bgcolor="#000000"><img src={blank} width="50" height="12"/></td>
            </tr>
            <tr bgcolor="E54C00">
                <td valign="top" bgcolor="#000000">&nbsp;</td>
                <td width="157" valign="top" bgcolor="#000000">&nbsp;</td>
                <td width="216" valign="top" bgcolor="#000000">&nbsp;</td>
                <td width="134" height="19" valign="top" bgcolor="#000000">&nbsp;</td>
                <td width="178" height="19" valign="top" bgcolor="#000000">&nbsp;</td>
                <td height="19" bgcolor="#000000">&nbsp;</td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="1" colspan="6" valign="top" bgcolor="#333333"><img src={blank} width="100" height="1"/><img src={blank} width="100" height="1"/></td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="126" colspan="6" bgcolor="#000000">
                    <NavFooter></NavFooter>
                </td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="1" colspan="6" bgcolor="#333333"><img src={blank} width="100" height="1"/></td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="43" colspan="6" bgcolor="#000000"><div align="center"><font color="#999999" size="1" face="Verdana, Arial, Helvetica, sans-serif">Media,
                    photos and materials are all property of Mad Bomber Fireworks Productions
                    ~ All Rights Reserved ~ Copyright &copy; 2005-2026</font></div></td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="1" colspan="6" valign="top" bgcolor="#666666"><img src={blank} width="100" height="3"/></td>
            </tr>
            </table>
    </div>);
} export default Services