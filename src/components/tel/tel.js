import React, {useState} from "react";
import "./tel.css"
import flag from "../../img/flag.png";
import icon from "../../img/iconNight.png";
import {useDispatch, useSelector} from "react-redux";

export default function Tel (props) {
  // const [tems, setTems] = useState("light")

  const teams = useSelector(state => state);
let sty = props.color

  const dispatch = useDispatch();
  const handlTemsD = () => dispatch({type: "DARK", text: "dark"})
  const handlTemsL = () => dispatch({type: "DARK", text: "light"})
  return (
    <div className={"secondHeadNavRight"}>
      <div className={"blockNav"}>
      <img src={flag} alt="tel"/>
      <select name="+74951520133" id="navTel" style={{color: `${props.sty.color}`, backgroundColor: `${props.sty.backgroundCol}`}}>
        <option className={"tel"}> +7(495)152-01-33</option>
        <option> +7(495)152-0</option>
      </select>
      </div>
      <button className={"orderTel but"}>заказать звонок</button>
      <div className={"blockNav"}>
      <select name="lan" id="lang" style={{border: `${props.sty.border}`, color: `${props.sty.color}`, backgroundColor: `${props.sty.backgroundCol}`}}>
        <option value="ru" className={"language"}>ru</option>
      </select>
      <button className={"butHeader"} style={{border: `${props.sty.border}`, backgroundColor: `${props.sty.backgroundCol}`}} onClick={teams === "light" ? handlTemsD : handlTemsL}><img src={props.sty.img} alt="icon night" className={"iconNight"}/></button>
      </div>
    </div>
  )
}