import React from "react";
import "./economics.css"
import cardIcon1 from "../../img/economic/economicCardIcon1.png"
import cardIcon2 from "../../img/economic/economicCardIcon2.png"
import sign from "../../img/economic/sign.png"
import run from "../../img/run.png";
import economVideo from "../../img/economic/economVideo.png"
import {useSelector} from "react-redux";
import Video from "../video/video";

export default function Economics (props) {
  const vid = {
    img: economVideo,
    p1: "Посмотрите подробное видео о нашей платформе",
    p2: "5 минут 12 секунд",
    w: "110px",
    mobClass: "economMobVid"
  }
  const teams = useSelector(state => state)
  const cards = [
    {
      heading: "Местоположение...................................................................................................................................................................................",
      textS: "Местоположение клиники ",
      textP: "занимает первое место среди факторов выбора. Вторым пунктом, на который опирается клиент при выборе поставщика услуги, является диапазон стоимости лечения.",
      img:cardIcon1
    },
    {
      heading: "Стоимость........................................................................................................................................................................................",
      textS: "Стоимость лечения ",
      textP: "оказываемой помощи нередко зависит от расположения клиники, условий пребываний пациента, его комфорта, то есть показателей, которые не влияют на качество лечения.",
      img: cardIcon2
    }
  ];
  const cardsItem = cards.map((cardItem) => (
    <div className={"economicCard"} key={cardItem.heading}>
      <img src={cardItem.img} alt="icon" className={"economCardIcon"}/>
      <p className={"economCardHeading"}>{cardItem.heading}</p>
        <p className={teams !== "dark" ? "economCardTextS" : "economCardTextS dark"}>{cardItem.textS} <span className={"economCardTextP"}> {cardItem.textP}</span></p>
    </div>
  ));
  return (
    <div className={teams !== "dark" ? "backgroundMainBlocks" : "backgroundMainBlocks dark"}>
      <div className={"wrapper"}>
      <p className={teams !== "dark" ? "headingBlock" : "headingBlock dark"}>Экономика проекта</p>
      <p className={teams !== "dark" ? "subtittle" : "subtittle dark"}>Есть перечни причин по которым выбирает пациент и которые не зависят от клиники какой бы она не была широкой</p>

      <div className={"economCards"}>
        {cardsItem}
      </div>
      <div className={"economRedBlock"}>
        <div className={"economSign"}>
          <img src={sign} alt="sign"/>
        </div>
        <p className={"textP"}>Оперируя данными показателями,<span className={"textS"}> мы стараемся удовлетворить потребности и пожелания пациента</span>, тем самым повышаем количество клиентов, записанных на консультацию. Увеличение потока пациентов позволяет снизить затраты на рекламу, давая нам еще одно конкурентное преимущество.</p>
      </div>
      <Video vid={vid}/>
      </div>
    </div>
  )
}