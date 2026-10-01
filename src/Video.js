/* eslint-disable */
import { NavLink } from "react-router-dom";
import NavFooter from "./NavFooter";

var blank = require("./blank.gif");
var hline = require("./hline.jpg");
var videobanner = require("./videobanner.jpg");

function Video(){
    return (<div>
        <table width="800" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#333333">
            <tr bgcolor="#656565">
                <td height="1" colspan="5" valign="top"><div align="center"><img src={blank} width="100" height="3"/></div>
                </td>
            </tr>
                <tr>
                <td width="1" rowspan="11" valign="top" bgcolor="#666666">&nbsp;</td>
                <td height="144" colspan="4" valign="bottom" bgcolor="#000000"><div align="center"><img src={blank} width="771" height="15" border="0"/><br/>
                    <NavLink to="/"><img src={videobanner} width="770" height="130" border="0"/></NavLink></div>       
                </td>
                </tr>
                <tr bgcolor="E54C00">
                <td height="12" colspan="4" valign="top" bgcolor="#000000"><div align="center"><img src={hline} width="650" height="1"/></div></td>
                </tr>
            <tr bgcolor="E54C00">
                <td height="12" colspan="4" valign="top" bgcolor="#000000"><div align="center"><font size="3"><em><font color="#FF0000"><img src={hline} width="650" height="1"/></font></em></font></div></td>
            </tr>
            <tr bgcolor="E54C00">
                <td width="41" bgcolor="#000000"><div align="left"><img src={blank} width="40" height="12"/></div></td>
                UNDER CONSTRUCTION
                <td width="40" bgcolor="#000000"><img src={blank} width="40" height="12"/></td>
            </tr>
            <tr bgcolor="E54C00">
                <td valign="top" bgcolor="#000000"><div align="center"></div></td>
                <td width="320" height="19" bgcolor="#000000"><div align="center"><font color="#FFFF00" size="2" face="Verdana, Arial, Helvetica, sans-serif"></font><font color="#FFFF00" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong><font color="#FFFF00" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong><font color="#FFFF00" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong><font color="#CFC2A1"><em><font size="3"><img src={blank} width="120" height="12"/></font></em></font></strong></font></strong></font></strong></font></div>      <div align="center"></div></td>
                <td height="19" valign="top" bgcolor="#000000"><font color="#CFC2A1"><em><font size="3"><img src={blank} width="300" height="12"/></font></em></font></td>
                <td height="19" bgcolor="#000000">&nbsp;</td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="1" colspan="4" valign="top" bgcolor="#333333"><img src={blank} width="100" height="1"/><img src={blank} width="100" height="1"/></td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="126" colspan="6" bgcolor="#000000">
                    <NavFooter></NavFooter>
                </td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="1" colspan="4" bgcolor="#333333"><img src={blank} width="100" height="1"/></td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="43" colspan="4" bgcolor="#000000"><div align="center"><font color="#999999" size="1" face="Verdana, Arial, Helvetica, sans-serif">Media,
                    photos and materials are all property of Mad Bomber Fireworks Productions
                    ~ All Rights Reserved ~ Copyright &copy; 2005-2026</font></div></td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="1" colspan="4" valign="top" bgcolor="#666666"><img src={blank} width="100" height="3"/></td>
            </tr>
        </table>
    </div>);
} export default Video;