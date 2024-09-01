import React, {useState} from "react";
import "./direction.css"
import points from "../../../img/points.png"
import cardImg from "../../../img/client/direction/cardImg.png"
import discriptionVideo from "../../../img/client/direction/discriptionVideo.png"
import Video from "../../video/video";
import {useSelector} from "react-redux";

export default function Direction () {
  const teams = useSelector(state => state)
  const [active, setActive] = useState("Наркология")
  const vid = {
    img: discriptionVideo,
    p1: "Посмотрите подробное видео о нашей платформе",
    p2: "5 минут 12 секунд",
    w: "110px",
    mobClass: "directionMobVid"
  }
  const cards = [
    {
      heading: "Наркология",
      p1:"- Вывод из запоя",
      p2:"- Кодирование",
      p3: "",
      p4: "",
      p5: "",
      p6: "",
      img: cardImg
    },
    {
      heading: "Стоматология",
      p1: "- Вывод из запоя",
      p2: "- Кодирование",
      p3: "- Кодирование",
      p4: "",
      p5: "",
      p6: "",
      img: cardImg
    },
    {
      heading: "Проктология",
      p1: "- Вывод из запоя",
      p2: "- Кодирование",
      p3: "- Просто пункты",
      p4: "- Для симметрии",
      p5: "",
      p6: "",
      img: cardImg
    },
    {
      heading: "Диагностика",
      p1: "- Иногда стоимость",
      p2: "- диагностики может быть",
      p3: "- выше, чем стоимость самого",
      p4: "- лечения. Снижаем стоимость",
      p5: "- до 50% на проведение",
      p6: "- лабораторных исследований.",
      img: cardImg
    }
  ]
  const cardsItem = cards.map((cardItem) => (
    <div className={active === cardItem.heading ? "directionCard directionCardActive" : "directionCard"} onClick={() => setActive(cardItem.heading)}>
      <div className={"directionCardContent"}>
        <div className={"directionCardText"}>
          <p className={"directionCardHeading"}><img src={points} alt="points"/>{cardItem.heading}</p>
          {cardItem.p1 ? <p className={teams !== "dark" ? "directionCardtextP" : "directionCardtextP dark"}>{cardItem.p1}</p> : <></>}
          {cardItem.p2 ? <p className={teams !== "dark" ? "directionCardtextP" : "directionCardtextP dark"}>{cardItem.p2}</p> : <></>}
          {cardItem.p3 ? <p className={teams !== "dark" ? "directionCardtextP" : "directionCardtextP dark"}>{cardItem.p3}</p> : <></>}
          {cardItem.p4 ? <p className={teams !== "dark" ? "directionCardtextP" : "directionCardtextP dark"}>{cardItem.p4}</p> : <></>}
          {cardItem.p5 ? <p className={teams !== "dark" ? "directionCardtextP" : "directionCardtextP dark"}>{cardItem.p5}</p> : <></>}
          {cardItem.p6 ? <p className={teams !== "dark" ? "directionCardtextP" : "directionCardtextP dark"}>{cardItem.p6}</p> : <></>}
        </div>
        <div className={"directionCardImg"} style={{backgroundImage: `url(${cardItem.img})`}}></div>
      </div>
    </div>
  ))

  return (
    <div className={"noneBackgroundMainBlocks"}>
      <div className={"wrapper"}>
        <p className={teams !== "dark" ? "headingBlock" : "headingBlock dark"}>Выберите направление:</p>
        <div className={"directionCards"}>
          {cardsItem}
        </div>
        <Video vid={vid}/>
      </div>
    </div>
  );
}