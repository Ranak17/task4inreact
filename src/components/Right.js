import React from 'react';
import Clock from '../images/clock.png';
import Vector from '../images/Vector.png';
import BookmarkIcon from '../images/bookmark-icon.png';
import StarRating from './StarRating';
import { useState } from 'react';
export default function Right() {
const [text,setText] = useState("Your Comments")
  return (
    <div className="right">
    <div  style={{padding:"0.5rem",display: "grid",
    gridTemplateColumns: "7rem 1fr 7rem"}}>
        <span className="right-item-heading-style" style={{fontSize: "0.7rem"}}>+NEW QUESTION</span>
        <span></span>
        <span style={{color: "#dadcdf",fontSize: "0.7rem"}}>9 Questions, 18 min</span>
    </div>
    <div className="right-item">
        <div className="right-item-header">
<div className="right-item-heading-style"><span style={{color: "#dadcdf"}}>1</span></div>
<div className="right-item-heading-style"><span><img className="bookmark-icon" src={BookmarkIcon} alt=""/></span>
Bookmark in video</div>
<div className="right-item-heading-style">Mark as
<span className="right-icon"><img src={Vector}alt="icon"/></span> </div>
<div className="right-item-heading-style"></div>
<div className="right-item-heading-style" style={{justifyContent: "center",alignItems: "center"}}><img className="icon" style={{margin: "0 0.7rem 0 0"}} src={Clock} alt=""/>
<span style={{color: "#dadcdf"}}>3-5 mins</span></div>
        </div>
        <div className="right-item-element">
            <span></span>
            <div style={{color: "white", padding: "1.2rem 1.2rem"}}>Ask the candidate to explain his/her career so far. Validate  current job responsibilites and role. 
            <div style={{color: "#00c2ff",margin: "1rem 0 1rem 0"}}>Show answer key</div>
            <textarea className="textarea" onChange={(ele)=>{setText(ele.target.value)}} name="" id="textarea" rows="5" value={text}></textarea>
            <div className="rating" style={{display:'grid',gridTemplateColumns:"4rem 8rem"}}>
                <span style={{marginRight:"1rem",}}>Rating</span>
                {/* <a className="icon star" style={{fontSize: "200%"}}>&star;</a>
                <span clas></span>
                <a className="icon star" style={{fontSize: "200%"}}>&star;</a>
                <a className="icon star" style={{fontSize: "200%"}}>&star;</a>
                <a className="icon star" style={{fontSize: "200%"}}>&star;</a>
                <a className="icon star" style={{fontSize: "200%"}}>&star;</a> */}
                <StarRating />
                
            </div>
            </div>
        </div>
    </div>
    <div className="right-item">
        <div className="right-item-header">
            <div className="right-item-heading-style"><span style={{color:"#dadcdf"}}>1</span></div>
            <div className="right-item-heading-style"><img className="bookmark-icon" src={BookmarkIcon} alt=""/>
                Bookmark in video
                
            </div>
            <div className="right-item-heading-style">Mark as
<span className="right-icon"><img src={Vector} alt="icon"/></span> 
            </div>
            <div className="right-item-heading-style">
            </div>
            <div className="right-item-heading-style" style={{justifyContent: "center",alignItems: "center"}}>
                
                <img className="icon" src={Clock} alt="" style={{margin: "0 0.7rem 0 0"}}
            /><span style={{color: "#dadcdf"}} >2 mins</span></div>
        </div>
        <div className="right-item-element">
            <span></span>
            <div style={{padding: "1.2rem 1.2rem", color: "white"}}>Ask the candidate to explain his/her career so far. Validate  current job responsibilites and role. </div>
        </div>
    </div>
</div>
  )
}
