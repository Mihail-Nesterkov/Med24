import React, {useState} from "react";
import "./header.css"
import {NavLink} from "react-router-dom";
import logo from "../../img/logo.png"
import iconMap from "../../img/iconMap.png"
import iconEnter from "../../img/iconEnter.png"
import Tel from "../tel/tel";
import icon from "../../img/iconNight.png";
import {useSelector} from "react-redux";
import NavList from "../nav list/navList";

export default function Header () {
    // const tems = useSelector(state => state.tems)
    // console.log(tems)
const [activeNav, setActiveNav] = useState(true)
    const sty = {
        color: "#444444;",
        backgroundCol: "#ffffff",
        border: "1px solid rgba(68, 68, 68, 0.2)",
        img: icon
    }
    const mobNav = {
        classMob: "mobNav"
    }
    let styleNavList = {
        display: "none"
    }
    if (activeNav) {
        styleNavList = {
            display: "none"
        }
    } else {
        styleNavList = {
            display: "flex"
        }
    }
    function clickMenu () {
        setActiveNav(!activeNav)
        console.log(activeNav)
    }
    return (
      <div className={"header"}>
          <div className="firstHead">
              <div className={"headerWrrap"}>
                  <NavList/>
                  <ul className="secondHeadNav">
                      <li className={"butEnter"}><img src={iconEnter} alt="icon enter"/>Войти</li>
                      <li>|</li>
                      <li className={"liMap"}><img src={iconMap} alt="icon map"/> Ваш город: Воронеж</li>
                  </ul>
              </div>
          </div>
          <div className="secondHead">
              <div className={"headerWrrap"}>
                  <div className={"secondHeadContent"}>
                      <div className={"logoBlock"}>
                          <img src={logo} alt="logo" className={"logo"}/>
                          <button className={"but butMenuHeader"} onClick={clickMenu}>МЕНЮ</button>
                      </div>
                      <Tel sty={sty}/>
                  </div>
              </div>
          </div>
          <NavList mobNav={mobNav}
                   styleNavList={styleNavList}
          />
      </div>
    );
}




