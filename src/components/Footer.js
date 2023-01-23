import React from 'react';
import Group11 from "../images/Group 11.png";
import Group12 from "../images/Group 12.png";
import Group13 from "../images/Group 13.png";
import Group14 from "../images/Group 14.png";
import Group15 from "../images/Group 15.png";
import Group2 from "../images/Group 2.png";
export default function Footer() {
  return (
    <div className="footer">
    <div className="left-footer">
        
        <img className="left-footer-icon" src={Group11} alt=""/>
        <img className="left-footer-icon" src={Group12} alt=""/>
        <img className="left-footer-icon" src={Group13}alt=""/>
        <img className="left-footer-icon" src={Group14} alt=""/>
        <img className="left-footer-icon" src={Group15} alt=""/>
    </div>
    <div className="right-footer">
        <span></span>
        <img className="left-footer-icon" src={Group2} alt=""/>
    </div>
</div>
  )
}
