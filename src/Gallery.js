/* eslint-disable */
import { NavLink } from "react-router-dom";
import NavFooter from "./NavFooter";
var blank = require("./blank.gif");
var hline = require("./hline.jpg");
var stagingslideshow = require("./stagingslideshow.jpg")
var august = require("./august.jpg");
var julylink = require("./julylink.jpg");
var showphotos = require("./showphotos.jpg");
var showphoto02 = require("./showphoto02.jpg");
var warehouse01a = require("./warehouse01a.jpg");
var gallerybanner = require("./gallerybanner.jpg");

function Gallery(){
    return(<div>
        <table width="800" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#333333">
            <tr bgcolor="#656565">
                <td height="1" colspan="7" valign="top"><div align="center"><img src={blank} width="100" height="3"/></div>
                </td>
            </tr>
            <tr>
            <td width="1" rowspan="16" valign="top" bgcolor="#666666">&nbsp;</td>
            <td height="144" colspan="6" valign="bottom" bgcolor="#000000"><div align="center"><img src={blank} width="771" height="15" border="0"/><br/>
                <NavLink to="/"><img src={gallerybanner} width="770" height="130" border="0"/></NavLink></div>       
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
            <td height="39" colspan="6" bgcolor="#000000"><div align="center"><font color="#FFFFFF" size="2" face="Verdana, Arial, Helvetica, sans-serif">
                TODO:EMBED IMAGES HERE</font></div></td>
        </tr>
        <tr bgcolor="E54C00">
            <td width="50" bgcolor="#000000"><div align="left"><img src={blank} width="50" height="12"/></div></td>
            <td width="175" bgcolor="#000000"><div align="center"><a href="staging.html" target="_blank"><img src={stagingslideshow} width="110" height="85" border="0"/></a></div></td>
            <td width="175" bgcolor="#000000"><div align="center"><a href="august07.html" target="_blank"><img src={august} width="110" height="85" border="0"/></a></div></td>
            <td width="173" height="111" bgcolor="#000000"><div align="center"><font color="#AC0605" size="2" face="Verdana, Arial, Helvetica, sans-serif"><a href="july07.html" target="_blank"><img src={julylink} width="110" height="85" border="0"/></a></font></div></td>
            <td width="176" bgcolor="#000000"><div align="center"><a href="showphotos.html" target="_blank"><img src={showphotos} width="110" height="85" border="0"/></a></div></td>
            <td width="50" bgcolor="#000000"><img src={blank} width="50" height="12"/></td>
        </tr>
        <tr bgcolor="E54C00">
            <td valign="top" bgcolor="#000000"><div align="center"></div></td>
            <td valign="top" bgcolor="#000000"><div align="center"><font color="#FFFFFF" size="1" face="Verdana, Arial, Helvetica, sans-serif">Mad
                Bomber<br/>
        Fireworks Productions<br/>
        Staging Process<br/>
        9 Photos</font></div></td>
            <td valign="top" bgcolor="#000000"><div align="center"><font color="#FFFFFF" size="1" face="Verdana, Arial, Helvetica, sans-serif">Mad
                Bomber<br/>
        Fireworks Productions<br/>
        Show Photos<br/>
        16 Photos</font></div></td>
            <td height="52" valign="top" bgcolor="#000000"><div align="center"><font size="2" face="Verdana, Arial, Helvetica, sans-serif"><font color="#999999"></font></font>
            </div>
            <div align="center"><font color="#FFFFFF" size="1" face="Verdana, Arial, Helvetica, sans-serif">Mad
                Bomber<br/>
        Fireworks Productions<br/>
        Show Photos<br/>
        16 Photos</font></div>
            </td>
            <td height="52" valign="top" bgcolor="#000000"><div align="center"><font color="#FFFFFF" size="1" face="Verdana, Arial, Helvetica, sans-serif">Mad
                Bomber<br/>
        Fireworks Productions<br/>
        Misc. Show Photos<br/>
        16 Photos</font></div></td>
            <td height="52" bgcolor="#000000">&nbsp;</td>
        </tr>
        <tr bgcolor="E54C00">
            <td height="12" valign="top" bgcolor="#000000">&nbsp;</td>
            <td height="12" valign="top" bgcolor="#000000"><img src={blank} width="175" height="12"/></td>
            <td height="12" valign="top" bgcolor="#000000"><img src={blank} width="175" height="12"/></td>
            <td height="12" bgcolor="#000000"><div align="right"></div>      
            <div align="center"></div></td>
            <td height="12" bgcolor="#000000"><font color="#CFC2A1"><em><font size="3"><img src={blank} width="175" height="12"/></font></em></font></td>
            <td height="12" bgcolor="#000000">&nbsp;</td>
        </tr>
        <tr bgcolor="E54C00">
            <td valign="top" bgcolor="#000000">&nbsp;</td>
            <td valign="top" bgcolor="#000000"><div align="center"><a href="miscshows.html" target="_blank"><img src={showphoto02} width="110" height="85" border="0"/></a></div></td>
            <td valign="top" bgcolor="#000000"><div align="center"><a href="warehouse01.jpg" target="_blank"><img src={warehouse01a} width="110" height="85" border="0"/></a></div></td>
            <td height="20" valign="top" bgcolor="#000000">&nbsp;</td>
            <td height="20" valign="top" bgcolor="#000000">&nbsp;</td>
            <td height="20" valign="top" bgcolor="#000000">&nbsp;</td>
        </tr>
        <tr bgcolor="E54C00">
            <td valign="top" bgcolor="#000000">&nbsp;</td>
            <td valign="top" bgcolor="#000000"><div align="center"><font color="#FFFFFF" size="1" face="Verdana, Arial, Helvetica, sans-serif">Mad
                Bomber<br/>
        Fireworks Productions<br/>
        Staging Process<br/>
        9 Photos</font></div></td>
            <td valign="top" bgcolor="#000000"><div align="center"><font color="#FFFFFF" size="1" face="Verdana, Arial, Helvetica, sans-serif">Mad
                Bomber<br/>
        Fireworks Productions<br/>
        Indiana Warehouse<br/>
        1 Photo</font></div></td>
            <td height="20" valign="top" bgcolor="#000000">&nbsp;</td>
            <td height="20" valign="top" bgcolor="#000000">&nbsp;</td>
            <td height="20" valign="top" bgcolor="#000000">&nbsp;</td>
        </tr>
        <tr bgcolor="E54C00">
            <td height="42" colspan="6" bgcolor="#000000"><div align="center"><font color="#CFC2A1"><font color="#FF0000" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>All
            fireworks pictures are actual footage from our shows.</strong></font></font></div></td>
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
} export default Gallery;