import React from "react";
import "./video.css"
import run from "../../img/run.png";

export default function Video (props) {
const setting = props.vid
  return (
    <div className={"videoBlock"}>
      <img src={setting.img} alt="" className={`${setting.mobClass} vidImg`}/>
      <div className={"runBlock"}>
        <p>{setting.p1}</p>
        <button className={"runButton"} style={{width: setting.w, height: setting.w}}><img src={run} alt="run"/></button>
        <button className={`MobVid`}><img src={run} alt="run"/></button>
        <p>{setting.p2}</p>
      </div>
    </div>
  );
}