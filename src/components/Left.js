import React from 'react';
import Person from '../images/Person.png';
import ChatIcon from '../images/chat-icon.png';
import VideoIcon from '../images/Video.png';
import Mike from '../images/mike.png';
export default function Left() {
  return (
    <div className="left">
    <div className="left-top">
        <span style={{margin:"0 0 0 1rem"}}>59m 32s remaining</span>
        <div className="left-top-img">
            <img src={Person} alt="pic"/>
        </div>
    </div>
    <div className="left-bottom" style={{padding:"0 1rem"}}>
        <div className="left-bottom-item"></div>
        <div className="left-bottom-item"></div>
        <div id="ibi3" className="left-bottom-item" style={{fontSize: "0.7rem"}}>CANDIDATE</div>
        <div id="ibi4" className="left-bottom-item" style={{fontSize: "0.7rem"}}>INTERVIEWER</div>
        <div id="ibi5" className="left-bottom-item" style={{color:"white",fontWeight: "bolder"}}>
        <div>
            <span id="candidateName">Kip Bennett</span> (<span style={{color:"green"}}>Oniline</span>)
        </div>
        <div style={{display: "flex",justifyContent: "flex-start",width: "100%"}}>
            <div className="icon" style={{margin:" 0 2rem"}}>
                <img style={{overflow: "visible"}} src={Mike} alt="mike"/>
            </div>
            <div className="icon ">
                <img style={{overflow: "visible"}} src={ChatIcon} alt=""/>
            </div>
        </div>
        </div>
        <div id="ibi6" style={{display: "flex"}}>
            <div className="left-bottom-item"  style={{color: "white", fontWeight: "bolder"}}>You(<span style={{color: "green"}}>Oniline</span>)
            </div>
        <div style={{display: "flex",justifyContent: "flex-end",width: "100%"}}>
            <div className="icon" style={{margin: "0 1rem"}}>
                <img style={{overflow: "visible"}} src={Mike} alt="mike"/>
            </div>
            <div className="icon" style={{margin: "0 1rem"}}>
                <img style={{overflow: "visible"}} src={VideoIcon} alt="mike"/>
            </div>
        </div>
        </div>


</div>
</div>
  )
}
