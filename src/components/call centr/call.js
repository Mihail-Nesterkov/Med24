import React, {useState} from "react";
import "./call.css"
import cardBackground from "../../img/call/callCardBackground.png"
import run from "../../img/run.png";
import {useSelector} from "react-redux";

export default function Call () {
  const teams = useSelector(state => state)
const [active, setActive] = useState("00")
  const card = [
    {
      num: "01",
      tems: "Сбор анамнеза по алгоритму первичной консультации заболевания",
      background: cardBackground,
      description: "fdfkdv 'kvdivk mkdlvmkl dvmkldmv kdvmdkv mdsks vmkd"
    },
    {
      num: "02",
      tems: "Учитываем критерии и пожелания пациента",
      background: cardBackground,
      description: "fdfkdv' kvdivkvm kdlvmkldvm kldmvkd vmdkvmd sksvmkdnvcd uvdjvk dnjvdnv"
    },
    {
      num: "03",
      tems: "Согласие на лечение сегодня",
      background: cardBackground,
      description: "Все информирование пациента о методах лечения, ответы на интересующие вопросы и первичный опрос лежит в нашей зоне ответственности колл центра. Мы направляем пациентов на лечение, только в случае готовности пациента явится на прием сегодня."
    },
    {
      num: "04",
      tems: "Координация и сопровождение всех этапов полного цикла лечения пациента",
      background: cardBackground,
      description: "fdfk dv'kvd ivkvm kdlvm kldvmkldmvk dvmdkvm dsksvmkd mckenkvod ;vndvnjvndv dkvnvjnsd vjnjkk"
    }
  ]
  const cardsItem = card.map((cardItem) => (
    <div className={active === cardItem.num ? "mainCard active" : "mainCard"}
         style={{backgroundImage: `url(${cardBackground})`}} key={cardItem.tems}>
      <div className={"cardDis"}>
        <p className={"numCard"}>{cardItem.num}.</p>
        <div className={"temsCard"}>
          <p className={"tems"}>{cardItem.tems}</p>
          <p className={active === cardItem.num ? "callCardBut active" : "callCardBut"} onClick={() => active === cardItem.num ? setActive("00") : setActive(cardItem.num)}>{active === cardItem.num ? "скрыть" : "читать полностью"}</p>
          <p className={"cardDescriptionText"} style={active !== cardItem.num ? {display: "none"} : {display: "initial"}}>{cardItem.description}</p>
        </div>
      </div>
      <div className={"callRun"}>
        <button className={"runButton runButtonCall"} style={active !== cardItem.num ? {display: "none"} : {display: "flex"}}><img src={run} alt="run"/></button>
        <p style={active !== cardItem.num ? {display: "none"} : {display: "initial"}}>Посмотрите подробное видео о нашей платформе</p>
      </div>
      <div className={teams !== "dark" ? "oppp" : "oppp dark"}></div>
    </div>
  ));
  return (
    <div className={"noneBackgroundMainBlocks"}>
      <div className={"wrapper"}>
        <p className={teams !== "dark" ? "headingBlock calHeading" : "headingBlock calHeading dark"}>Круглосуточный колл
          центр с координацией этапов лечения</p>
        <div className={"callCards"}>
          {cardsItem}
        </div>
      </div>
    </div>
  );
}