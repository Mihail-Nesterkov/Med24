import React, {useEffect, useState} from "react";
import "./what.css"
import arrowL from "../../img/what/arrowLeft.png"
import arrowR from "../../img/what/arrowRight.png"

import {useSelector} from "react-redux";
import Video from "../video/video";
import interVideo from "../../img/client/interection/interectionVideo.png";

export default function What (props) {
  const teams = useSelector(state => state)
  const [active, setActive] = useState(1)
  const [marg, setMarg] = useState(0)
  const navItems = props.navItems

  let video = props.navItems[active - 1].img
  const vid = {
    img: video,
    w: "70px",
    mobClass: "whatMobVid"
  }
  const vid2 = {
    img: interVideo,
    w: "70px",
    mobClass: "whatMobVid"
  }

  let textNumSec = navItems.length
  let textHeader = navItems[active - 1].name
  let textText = navItems[active - 1].description
  const whatNavItems = navItems.map((whatNavItem) => (
    <>
      {teams !== "dark" ? <li
        className={active === whatNavItem.num ? "whatNavName whatNavNameActive" : "whatNavName"} onClick={() => setActive(whatNavItem.num)} style={props.styleNavLi} key={whatNavItem.name}>{whatNavItem.name}</li> : <li
        className={active === whatNavItem.num ? "whatNavName whatNavNameActive" : "whatNavName dark"} onClick={() => setActive(whatNavItem.num)} style={props.styleNavLi} key={whatNavItem.name}>{whatNavItem.name}</li>}
      <li>&middot;</li>
    </>
  ));
  let list
  let listH
  function left() {
    if (marg >= 0) {
      setMarg(0);
    } else {
      setMarg(marg + 10);
    }
  }
    function rightF() {
      if (list <= listH) {
        setMarg(marg)
      } else {
        setMarg(marg - 10)
      }
    }
  let margMin
  useEffect(() => {
    list = document.getElementById('list').scrollWidth;
    listH =document.getElementById('list').offsetWidth;
    margMin = (listH - list)
  })
const blockk = props.block
  let sub = <p></p>
  let leftt
  let rightt
  if (blockk.sub.length > 1) {
    sub = <p className={teams !== "dark" ? "subtittle" : "subtittle dark"}>{blockk.sub}</p>
  } else {
    leftt = <img src={arrowL} alt="arrow left" onClick={left}/>
    rightt = <img src={arrowR} alt="arrow right" onClick={rightF}/>
  }
  let headerBlock = props.headerBlock
  let headerBlockk = <></>
  if (headerBlock !== undefined) {
    headerBlockk = <div className={"headerBlockk"}>
      <p className={"whatBlockContentTextHeader"}>{headerBlock.header}</p>
      <p className={teams !== "dark" ? "subtittle" : "subtittle dark"}>{headerBlock.sub}</p>
      <p className={teams !== "dark" ? "subtittle" : "subtittle dark"}>{headerBlock.sub1}</p>
    </div>
  }
  function scrollTouch () {
    if (marg + (clickEndX - clickStartX) < margMin){
      setMarg(margMin)
    } else if (marg + (clickEndX - clickStartX) > margMax) {
      setMarg(margMax)
    } else {
      setMarg(marg + (clickEndX - clickStartX))
    }
  }
  let margMax = 0

  let clickStartX
  let clickEndX
const inter = <div className={teams !== "dark" ? "interactionMain mainBlockContent" : "interactionMain mainBlockContent dark"}>
  <div className={"interactionContent"}>
    <p className={"whatBlockContentTextHeader"}>Взаимодействие и коммуникация:</p>
    <p className={teams !== "dark" ? "subtittle" : "subtittle dark"}>Коммуникация между врачом и пациентом – это сложный инструмент с разнообразными
      эффектами. Врач с низкими навыками коммуникации может быть успешным благодаря высокой компетентности, но
      также может сложиться и обратная ситуация. Объективную оценку эффективности работы дать может только
      статистика.</p>
  </div>
  <div className={"interactionVideo"}>
    <Video vid={vid2}/>
  </div>
</div>
  return(
    <div className={teams !== "dark" ? "backgroundMainBlocks" : "backgroundMainBlocks dark"}>
      <div className={"wrapper"}>
      <p className={teams !== "dark" ? "headingBlock" : "headingBlock dark"}>{blockk.header}</p>
      {sub}
      <div className={teams !== "dark" ? "whatBlock mainBlockContent" : "whatBlock mainBlockContent dark"}>
        {headerBlockk}
        <div className={"whatBlockNav"}>
          {leftt}
          <div className={"whatBlockNavItems"} >
            <ul id={"list"} style={{marginLeft: `${marg}px`}} onTouchStart={(event) => clickStartX = event.touches[0].clientX} onTouchEnd={(event) => {
              clickEndX = event.changedTouches[0].clientX
              scrollTouch()
            }}>
              {whatNavItems}
            </ul>
          </div>
          {rightt}
        </div>
        <div className={"whatBlockContent"}>
          <Video vid={vid}/>
          <div className={"whatBlockContentSepar"}></div>
          <div className={"whatBlockContentText"}>
            <p className={"whatBlockContentTextNum"}>{active}<span>/{textNumSec}</span></p>
            <p className={"whatBlockContentTextHeader"}>{textHeader}</p>
            <p className={teams !== "dark" ? "whatBlockContentTextText" : "whatBlockContentTextText dark"}>{textText}</p>
          </div>
        </div>
      </div>
        {headerBlock !== undefined && headerBlock.sub.length > 1 ? inter : <></>}
      </div>
    </div>
  )
}