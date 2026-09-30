import NavFooter from "./NavFooter";
import { NavLink } from "react-router-dom";

var blank = require("./blank.gif");
var hline = require("./hline.jpg");
var techbanner = require("./techbanner.jpg");

function Technology() {
    return(
        <table width="800" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#333333">
            <tr bgcolor="#656565">
                <td height="1" colspan="7" valign="top"><div align="center"><img src={blank} width="100" height="3"/></div>
                </td>
            </tr>
            <tr>
            <td width="1" rowspan="14" valign="top" bgcolor="#666666">&nbsp;</td>
            <td height="144" colspan="6" valign="bottom" bgcolor="#000000"><div align="center"><img src={blank} width="771" height="15" border="0"/><br/>
            <NavLink to="/"><img src={techbanner} width="770" height="130" border="0"/></NavLink></div>       
            </td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="12" colspan="6" valign="top" bgcolor="#000000"><div align="center"><img src={hline} width="650" height="1"/></div></td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="29" colspan="6" valign="top" bgcolor="#000000"><div align="center"></div>      <div align="center"><font size="3"><em><font color="#FF0000"><strong><font face="Verdana, Arial, Helvetica, sans-serif">We
                make every show a work of art.</font></strong></font></em></font></div></td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="12" colspan="6" valign="top" bgcolor="#000000"><div align="center"><font size="3"><em><font color="#FF0000"><img src={hline} width="650" height="1"/></font></em></font></div></td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="19" colspan="6" bgcolor="#000000"><div align="center"></div></td>
            </tr>
            <tr bgcolor="E54C00">
                <td width="63" rowspan="3" bgcolor="#000000"><div align="left"><img src={blank} width="70" height="12"/></div></td>
                <td height="55" colspan="4" valign="top" bgcolor="#000000"><div align="center"></div>      
                <div align="left"><font color="#FFFFFF" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>Mad
                    Bomber Fireworks Productions has participated in the testing and design
                    of better products for both saftey and quality. Listed below are a
                    few of the state of art technologies, we use in creating a safer and
                more memorable production for your special event.</strong></font></div>      <div align="center"></div>    <div align="center"><font color="#AC0605" size="2" face="Verdana, Arial, Helvetica, sans-serif"></font></div>    <div align="left"><font color="#CCCCCC" size="2" face="Verdana, Arial, Helvetica, sans-serif"></font></div></td>
                <td width="51" rowspan="3" bgcolor="#000000"><img src={blank} width="50" height="12"/></td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="27" colspan="4" bgcolor="#000000"><div align="center"><font color="#CCCCCC" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong><font color="#FFFFFF">&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;</font><br/>
                </strong></font></div></td>
            </tr>
            <tr bgcolor="E54C00">
                <td colspan="4" bgcolor="#000000"><div align="center"><font color="#FFFFFF" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>Custom
                        Electric Firing Panels<bt/><br/>
                        <br/>
                        Custom Made Soundtracks for Pyro-Musicals<br/>
                        <br/>
                        Computer Choreographed Displays<br/>
                    <br/>
            Fiber Glass Mortars<br/>
            <br/>
            Custom Rack Configurations for Special Display Effects<br/>
            </strong></font></div></td>
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
    );
} export default Technology;