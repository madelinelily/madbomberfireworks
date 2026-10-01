/* eslint-disable */
import { NavLink } from "react-router-dom";
import NavFooter from "./NavFooter";

var blank = require("./blank.gif");
var hline = require("./hline.jpg");
var faqbanner = require("./faqbanner.jpg");
var faqs01 = require("./faqs01.jpg");
var faqs02 = require("./faqs02.jpg");
var faqs03 = require("./faqs03.jpg");
var faqs04 = require("./faqs04.jpg");

function Faq(){
    return(<div>
            <table width="800" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#333333">
                <tr bgcolor="#656565">
                    <td height="1" colspan="5" valign="top"><div align="center"><img src={blank} width="100" height="3"/></div>
                    </td>
                </tr>
                <tr>
                <td width="1" rowspan="24" valign="top" bgcolor="#666666">&nbsp;</td>
                <td height="144" colspan="4" valign="bottom" bgcolor="#000000"><div align="center"><img src={blank} width="771" height="15" border="0"/><br/>
                    <NavLink to="/"><img src={faqbanner} alt="" width="770" height="130" border="0"/></NavLink></div>
                </td>
                </tr>
                <tr bgcolor="E54C00">
                <td height="12" colspan="4" valign="top" bgcolor="#000000"><div align="center"><img src={hline} width="650" height="1"/></div></td>
                </tr>
            <tr bgcolor="E54C00">
                <td height="12" colspan="4" valign="top" bgcolor="#000000"><div align="center"><font size="3"><em><font color="#FF0000"><img src={hline} width="650" height="1"/></font></em></font></div></td>
            </tr>
            <tr bgcolor="E54C00">
                <td width="84" bgcolor="#000000"><div align="left"><img src={blank} width="80" height="12"/></div></td>
                <td colspan="2" valign="top" bgcolor="#000000"><div align="center">
                <p>&nbsp;</p>
                </div>      </td>
                <td width="86" bgcolor="#000000"><img src={blank} width="80" height="12"/></td>
            </tr>
            <tr bgcolor="E54C00">
                <td rowspan="12" valign="top" bgcolor="#000000"><div align="center"></div></td>
                <td width="399" height="19" valign="top" bgcolor="#000000"><font color="#FFFF00" size="2" face="Verdana, Arial, Helvetica, sans-serif"> <strong>&nbsp;Q.
                    Why would I choose Mad Bomber Fireworks?</strong></font></td>
                <td width="230" height="19" bgcolor="#000000"><img src={blank} width="165" height="15"/></td>
                <td height="143" rowspan="12" bgcolor="#000000">&nbsp;</td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="257" colspan="2" valign="top" bgcolor="#000000"><blockquote>
                <blockquote>
                    <p><font color="#FFFFFF" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong><img src={faqs01} width="150" height="150" hspace="5" align="right"/>A.
                            We are a full time pyrotechnics company, 24/7, 365 days a years.
                            This is not a hobby.<br/>
                                <br/>
                        We are up to date and follow the laws
                        and regulations for professional fireworks displays.<br/>
                        <br/>
                        We have a large inventory from numerous manufacturers to give you
                        a spectacular variety of pyrotechnics for your display. This keeps
                        your display exciting and thrilling from start to finish.</strong></font></p>
                    <p><strong><font color="#FFFFFF" size="2" face="Verdana, Arial, Helvetica, sans-serif">We
                        test our products to ensure the highest quality.</font></strong></p>
                    <p><strong><font color="#FFFFFF" size="2" face="Verdana, Arial, Helvetica, sans-serif">We
                        test our equipment and train our operators to ensure the safest
                        setup and firing of your display.</font></strong></p>
                    <p><strong><font color="#FFFFFF" size="2" face="Verdana, Arial, Helvetica, sans-serif">We
                        customize all our displays. No package displays. Each event and
                        site is unique, so we work with you to produce a spectacular display
                        just for you.</font></strong></p>
                    </blockquote>
                </blockquote>
                </td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="18" colspan="2" valign="top" bgcolor="#000000"><font color="#FFFF00" size="2" face="Verdana, Arial, Helvetica, sans-serif">&nbsp;<strong>Q.
                Where do I start if I want a fireworks display?</strong></font></td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="259" colspan="2" valign="top" bgcolor="#000000"><blockquote>
                <blockquote>
                    <p><font color="#FFFFFF" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong> A.
                                Figure a budget for your event. <br/>
                        <br/>
                        <img src={faqs02} width="150" height="150" align="left"/>B.
                        You need a land area large enough to discharge a display meeting NFPA
                        1123 (National Fire Protection Agency) regulations for distances. Call
                        Mad Bomber
                        Fireworks we will come out and do a site survey and outline a fall
                        out zone for safety. This will also allow us the opportunity to discuss
                        your
                        event plans so
                        we could produce a customized display for you.<br/>
                        <br/>
                    &nbsp;C. At this point we may contact the local Fire Chief explain your intentions
                        and apply for the necessary permits to discharge fireworks. Keep in mind some
                        permits can have a nominal fee. This cost would be above the display cost.</strong></font></p>
                </blockquote>
                </blockquote>
                </td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="18" valign="top" bgcolor="#000000"><font color="#FFFF00" size="2" face="Verdana, Arial, Helvetica, sans-serif">&nbsp;<strong>Q.
                How much advance notice do I need for a display?</strong></font></td>
                <td rowspan="4" bgcolor="#000000"><div align="left"><img src={faqs04} width="150" height="150"/></div></td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="88" valign="top" bgcolor="#000000"><blockquote>
                <blockquote>
                    <p><font color="#FFFFFF" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>A.
                                The more time the better. Some permit applications need to be in
                                30
                                days prior      &nbsp;to
                                the display. Although contact us we may be able to work out the
                                permits in less time if needed.</strong></font></p>
                </blockquote>
                </blockquote>
                </td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="18" valign="top" bgcolor="#000000"><font color="#FFFF00" size="2" face="Verdana, Arial, Helvetica, sans-serif">&nbsp;<strong>Q.
                Do you charge by the minute for a display?</strong></font></td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="84" valign="top" bgcolor="#000000"><blockquote>
                <blockquote>
                    <p><font color="#FFFFFF" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>A.
                        No! All our displays are custom designed. We will produce the display
                        to have the most excitement for your event. This is not based on
                        a charge by the
                    minute. </strong></font></p>
                </blockquote>
                </blockquote>
                </td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="18" colspan="2" valign="top" bgcolor="#000000"><font color="#FFFF00" size="2" face="Verdana, Arial, Helvetica, sans-serif">&nbsp;<strong>Q.
                What does a professional display cost?</strong></font></td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="66" colspan="2" valign="top" bgcolor="#000000"><blockquote>
                <blockquote>
                    <p><font color="#FFFFFF" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>A.
                        A display may start as low as $5000.00 and go up to ??. Most towns,
                        villages, cities and park districts range between $10,000.00 to $60,000.00
                        dollars. Give us a call we would be glad to work with you to bring
                        an exciting pyrotechnic display for your event.</strong></font></p>
                </blockquote>
                </blockquote>
                </td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="18" colspan="2" valign="top" bgcolor="#000000"><font color="#FFFF00" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>&nbsp;Q.
                What do I need to do to work on a fireworks display?</strong></font></td>
            </tr>
            <tr bgcolor="E54C00">
                <td height="152" colspan="2" valign="top" bgcolor="#000000"><p><font color="#FFFFFF" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong><img src={faqs03} width="150" height="150" hspace="20" align="left"/>A.
                        To start you need to be at least eighteen (18) years old. Then contact
                        us by email at <a href="mailto:randy@madbomberfireworks.com">randy@madbomberfireworks.com.</a> &nbsp;&nbsp;Include
                        your name, phone number, area you live, and a little information
                        about yourself. We will then contact you to fill out an application
                        and necessary forms for the ATF. Upon the approval of the ATF you
                        could start your training. </strong></font></p>
                </td>
            </tr>
            <tr bgcolor="#000000">
                <td valign="top" bgcolor="#000000">&nbsp;</td>
            </tr>
            <tr bgcolor="E54C00">
                <td valign="top" bgcolor="#000000">&nbsp;</td>
                <td height="20" colspan="2" bgcolor="#000000"><div align="center"><font color="#CFC2A1"><font color="#FF00FF" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>All
                        fireworks pictures are actual footage from our shows.</strong></font></font></div></td>
                <td height="20" valign="top" bgcolor="#000000">&nbsp;</td>
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
    </div>)
} export default Faq;