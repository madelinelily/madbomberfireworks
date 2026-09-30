/* eslint-disable */
import { NavLink } from "react-router-dom";
import NavFooter from "./NavFooter";

var blank = require("./blank.gif");
var hline = require("./hline.jpg");
var contactbanner = require("./contactbanner.jpg");
var contact01 = require("./contact01.jpg");
var contact02 = require("./contact02.jpg");

function Contact(){
    return(<div>
        <table width="800" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#333333">
      <tr bgcolor="#656565">
        <td height="1" colspan="8" valign="top"><div align="center"><img src={blank} width="100" height="3"/></div>
        </td>
      </tr>
    <tr>
      <td width="1" rowspan="15" valign="top" bgcolor="#666666">&nbsp;</td>
      <td height="144" colspan="7" valign="bottom" bgcolor="#000000"><div align="center"><img src={blank} width="771" height="15" border="0"/><br/>
          <NavLink to="/"><img src={contactbanner} alt="" width="682" height="129" border="0"/></NavLink></div>
      </td>
    </tr>
    <tr bgcolor="E54C00">
      <td height="12" colspan="7" valign="top" bgcolor="#000000"><div align="center"><img src={hline} width="650" height="1"/></div></td>
    </tr>
  <tr bgcolor="E54C00">
    <td height="29" colspan="7" valign="top" bgcolor="#000000"><div align="center"></div>      <div align="center"><font size="3"><em><font color="#FF0000"><strong><font face="Verdana, Arial, Helvetica, sans-serif">We
    make every show a work of art.</font></strong></font></em></font></div></td>
  </tr>
  <tr bgcolor="E54C00">
    <td height="12" colspan="7" valign="top" bgcolor="#000000"><div align="center"><font size="3"><em><font color="#FF0000"><img src={hline} width="650" height="1"/></font></em></font></div></td>
  </tr>
  <tr bgcolor="E54C00">
    <td width="81" bgcolor="#000000"><div align="left"><img src={blank} width="80" height="12"/></div></td>
    <td width="200" bgcolor="#000000"><div align="center">
      <div align="center"><font color="#FFFFFF" face="Verdana, Arial, Helvetica, sans-serif"><strong><u>CHICAGOLAND
              </u></strong></font><font color="#FFFFFF" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong><br/>
  11N485 Hunter Trail<br/>
  Elgin, IL 60124 </strong></font> </div>
      <p align="center"><font color="#FFFFFF" face="Verdana, Arial, Helvetica, sans-serif"><strong><font size="2">Phone:
              847-464-1442<br/>
              Fax: 847-464-1388<br/>
              <a href="mailto:dan@madbomberfireworks.com">Email: Dan Miller</a><br/>
              <a href="mailto:mark@madbomberfireworks.com">Email: Mark Lowe
              </a></font></strong></font></p>
    </div>
    </td>
    <td height="151" colspan="3" bgcolor="#000000"><div align="center">
      <div align="center"><font color="#FFFFFF" face="Verdana, Arial, Helvetica, sans-serif"><strong><u>MAIN
              OFFICE</u><br/>
                <font size="2">3999 E. Hupp Road<br/>Building R-3-1<br/>
  La Porte IN 46350 </font> </strong></font> </div>
      <p align="center"><font color="#FFFFFF"><strong><font size="2" face="Verdana, Arial, Helvetica, sans-serif">Phone:
            219-393-5051<br/>
  Toll Free: 877-623-2662<br/>
  Fax: 219-393-3177<br/>
  <br/>
  <a href="mailto:andy@madbomberfireworks.com">Email: Andy James</a><br/>
  <a href="mailto:randy@madbomberfireworks.com">Email: Randy McCasland</a><br/>
  <a href="mailto:tim@madbomberfireworks.com">Email: Tim Walczak</a><br/>
  <a href="mailto:kelley@madbomberfireworks.com">Email: Kelley Hatfield-Turley</a></font></strong></font></p>
      </div>
    </td>
    <td width="203" bgcolor="#000000">      <div align="center">
      <p><font color="#FFFFFF" face="Verdana, Arial, Helvetica, sans-serif"><strong><u>CLEVELAND</u></strong></font><font color="#FFFFFF" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong><br/>
    30600 Lorain Rd<br/>
    North Olmstead, OH 44070 </strong></font> </p>
      <p><font color="#FFFFFF" face="Verdana, Arial, Helvetica, sans-serif"><strong><font size="2">Phone:
                  440-734-7697<br/>
      Fax: 440-734-1252</font></strong></font><font color="#FFFFFF">
      <br/>
      <br/>
      <a href="mailto:rick@madbomberfireworks.com"><strong><font size="2" face="Verdana, Arial, Helvetica, sans-serif">Email: Rick Hayden</font></strong></a></font></p>
    </div></td>
    <td width="83" bgcolor="#000000"><img src={blank} width="80" height="12"/></td>
  </tr>
  <tr bgcolor="E54C00">
    <td height="31" colspan="7" bgcolor="#000000"><div align="center"><font size="3"><em><font color="#FF0000"><img src={hline} width="650" height="1"/></font></em></font></div></td>
  </tr>
  <tr bgcolor="E54C00">
    <td height="31" bgcolor="#000000">&nbsp;</td>
    <td height="31" bgcolor="#000000"><img src={contact01} width="200" height="200"/></td>
    <td height="31" colspan="3" bgcolor="#000000"><font size="2" face="Verdana, Arial, Helvetica, sans-serif">
      <div align="center"><font color="#CCCCCC"><strong><u><font color="#FFFFFF">Indianapolis</font></u><font color="#FFFFFF"><br/>
  Phone: 317-417-1776 <br/>
  <a href="mailto:marty@madbomberfireworks.com">Email: Marty Miller</a> </font></strong></font></div>
    </font>
      <p align="center"><font color="#FFFFFF"><strong><font size="2" face="Verdana, Arial, Helvetica, sans-serif"><u>Milwaukee</u><br/>
  Phone: 262-369-0743<br/>
  <a href="mailto:Sales@madbomberfireworks.com">Email: Sales Milwaukee </a></font></strong></font></p></td>
    <td height="31" bgcolor="#000000"><img src={contact02} width="200" height="200"/></td>
    <td height="31" bgcolor="#000000">&nbsp;</td>
  </tr>
  <tr bgcolor="E54C00">
    <td height="27" colspan="7" bgcolor="#000000"><div align="center"><font size="3"><em><font color="#FF0000"><img src={hline} width="650" height="1"/></font></em></font></div></td>
  </tr>
  <tr bgcolor="E54C00">
    <td valign="top" bgcolor="#000000">&nbsp;</td>
    <td height="20" colspan="5" valign="top" bgcolor="#000000"><div align="center">
        <p><strong><font color="#FFFFFF" size="2" face="Verdana, Arial, Helvetica, sans-serif"><u><font color="#FF0000">Regulatory
                and Associations</font><br/>
          </u>There organizations promote safety and regulate the fireworks industry.
          All fireworks companies should be licensed by the ATF, have a hazardous
          material safety permit from the DOT and follow the guidelines set forth
          by the NFPA.</font></strong></p>
        <p><strong><font color="#CCCCCC" size="2" face="Verdana, Arial, Helvetica, sans-serif"><u><font color="#00FFFF">AMERICAN
                  PYROTECHNICS ASSOCIATION</font></u><a href="http://www.americanpyro.com" target="_blank"><br/>
        www.americanpyro.com</a></font></strong></p>
        <p><strong><font color="#CCCCCC" size="2" face="Verdana, Arial, Helvetica, sans-serif"><u><font color="#00FFFF">NATIONAL
                  FIRE PROTECTION AGENCY (NFPA)</font></u><a href="http://www.nfpa.org" target="_blank"><br/>
www.nfpa.org</a></font></strong></p>
        <p><strong><font color="#CCCCCC" size="2" face="Verdana, Arial, Helvetica, sans-serif"><u><font color="#00FFFF">U.S.
                  DEPARTMENT OF TRANSPORTATION</font></u><a href="http://www.dot.gov" target="_blank"><br/>
www.dot.gov</a><br/>
<br/>
<u><font color="#00FFFF">BUREAU OF ALCOHOL, TOBACCO AND FIREARMS</font></u><a href="http://www.dot.gov" target="_blank"><br/>
</a><a href="http://www.atf.gov" target="_blank">
www.atf.gov</a></font></strong></p>
        </div></td>
    <td height="20" valign="top" bgcolor="#000000">&nbsp;</td>
  </tr>
  <tr bgcolor="E54C00">
    <td valign="top" bgcolor="#000000">&nbsp;</td>
    <td valign="top" bgcolor="#000000"><img src={blank} width="200" height="12"/></td>
    <td width="91" height="20" valign="top" bgcolor="#000000">&nbsp;</td>
    <td width="49" bgcolor="#000000">&nbsp;</td>
    <td width="92" height="20" valign="top" bgcolor="#000000">&nbsp;</td>
    <td height="20" valign="top" bgcolor="#000000"><font color="#CFC2A1"><em><font size="3"><img src={blank} width="200" height="12"/></font></em></font></td>
    <td height="20" valign="top" bgcolor="#000000">&nbsp;</td>
  </tr>
  <tr bgcolor="E54C00">
    <td height="1" colspan="7" valign="top" bgcolor="#333333"><img src={blank} width="100" height="1"/><img src={blank} width="100" height="1"/></td>
  </tr>
  <tr bgcolor="E54C00">
    <td height="126" colspan="6" bgcolor="#000000">
                    <NavFooter></NavFooter>
    </td>
  </tr>
  <tr bgcolor="E54C00">
    <td height="1" colspan="7" bgcolor="#333333"><img src={blank} width="100" height="1"/></td>
  </tr>
  <tr bgcolor="E54C00">
    <td height="43" colspan="7" bgcolor="#000000"><div align="center"><font color="#999999" size="1" face="Verdana, Arial, Helvetica, sans-serif">Media,
          photos and materials are all property of Mad Bomber Fireworks Productions
          ~ All Rights Reserved ~ Copyright &copy; 2005-2026</font></div></td>
  </tr>
  <tr bgcolor="E54C00">
    <td height="1" colspan="7" valign="top" bgcolor="#666666"><img src={blank} width="100" height="3"/></td>
  </tr>
</table>
    </div>)
} export default Contact;