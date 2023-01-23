
import Vector from '../images/Vector.png';
import Finish from '../images/Finish.png'
import { useState } from 'react';


function Header(){
    const [report,setReport]=useState("REPORT");
    function setreport(id){
        setReport(id);
        
        document.getElementsByClassName('dropdown-content')[0].style.display=document.getElementsByClassName('dropdown-content')[0].style.display=="none"?"display":"none";
        // document.getElementsByClassName('dropdown-content')[0].style.display=="none"?"display":"none";
    }
    function getData(){
        let candidateName=document.getElementById('candidateName').innerHTML;
        let candidateReply=document.getElementById('textarea').value;
        // let rating=document.getElementsByClassName('active').length;
        let reportData=document.getElementById('reportbtn').value;
        let rating=document.getElementById("stars").value;
        let res={name:candidateName,candidateReply:candidateReply,rating:rating,ReportData:report}
        console.log(res);
      }
    return(<>
            <div className="header">
            <div className="header-item"><b>Microsoft India</b></div>
            <div className="header-item">Senior Devops Engineer</div>
            <div className="header-item">4:00pm-5:00pm</div>
            <div className="header-item">20 Nov 2021(Today)</div>
            <div className="header-item"></div>
            <div className="header-item right-header-item">
                <div className="dropdown">
                    <button className="dropbtn" id="reportbtn">{report}<img style={{width: "0.7rem",height: "0.6rem",margin:"0 0 0 0.5rem",overflow:"visible"}} src={Vector} alt="icon"/></button>
                    <div className="dropdown-content">
                        <a onClick={()=>setreport('REPORT 1')}>Report 1</a>
                        <a onClick={()=>setreport('REPORT 2')}>Report 2</a>
                        <a onClick={()=>setreport('REPORT 3')}>Report 3</a>
                    </div>
                  </div>
            </div>
            <div className="header-item right-header-item">
                <div className="dropdown">
                    <button className="dropbtn">MARK INTERVIEW <img style={{width: "0.7rem",height: "0.6rem",margin:"0 0 0 0.5rem",overflow:"visible"}} src={Vector} alt="icon"/></button>
                <div className="dropdown-content">
                <a href="#" value="">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
              </div>
            </div>
            <div className="header-item right-header-item" onClick={()=>getData()} style={{cursor: "pointer",color:"white",margin:"0 0 0 1rem",backgroundColor: "#d53737"}}>
                <div className="down-arrow-icon"><img src={Finish} alt="icon"/></div>
                FINISH</div>
        </div>
    </>);
}

export default Header;