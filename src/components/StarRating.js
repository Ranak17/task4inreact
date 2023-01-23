
import {FaStar,FaStarHalfAlt} from 'react-icons/fa';
import React from 'react';
function getRating(id){
for(let i=1;i<=id;++i){
    document.querySelector(`#stars :nth-child(${i})`).style.color='gold';
}
document.getElementById("stars").value=id;

for(let i=id+1;i<=5;++i){
  document.querySelector(`#stars :nth-child(${i})`).style.color='white';
}
}
export default function StarRating() {
  return (
    <div id="stars" style={{display:"flex",justifyContent:"space-around",width:'100%'}}>
    <FaStar onClick={()=>getRating(1)}/>
      <FaStar onClick={()=>getRating(2)}/>
      <FaStar onClick={()=>getRating(3)}/>
      <FaStar onClick={()=>getRating(4)}/>
      <FaStar onClick={()=>getRating(5)}/>
    </div>
  )
}
