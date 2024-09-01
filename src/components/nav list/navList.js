import React, {useEffect, useState} from "react";
import "./navList.css"
import {NavLink} from "react-router-dom";

export default function NavList(props) {
  const [sty, setSty] = useState(props.styleNavList)
  const headNav = [
    {
      name: "Для клиентов",
      url: "/client"
    },
    {
      name: "Для клиник",
      url: "/clinic"
    },
    {
      name: "О сервисе",
      url: ""
    }
  ]
  useEffect(() => {
    setSty(props.styleNavList)
  }, [props.styleNavList])

  const headNavList = headNav.map((headNavItem) => (
    <li className={'navLi'} key={headNavItem.name}><NavLink to={headNavItem.url}
                                                            className={"navl"}>{headNavItem.name}</NavLink></li>
  ));
  return (
    <ul className={props.mobNav === undefined ? `firstHeadNav` : "firstHeadNav mobNav"} style={sty}>
      {headNavList}
    </ul>
  )
};