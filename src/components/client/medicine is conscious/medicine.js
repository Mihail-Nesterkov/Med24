import React, {useState} from "react";
import "./medicine.css"
import {useSelector} from "react-redux";
import icon1 from "../../../img/client/medicine/icon1.png"
import icon2 from "../../../img/client/medicine/icon2.png"
import icon3 from "../../../img/client/medicine/icon3.png"
import medicineVideo from "../../../img/client/medicine/medicineVideo 1.png"
import Video from "../../video/video";


export default function Medicine () {
  const vid = {
    img: medicineVideo,
    w: "100px",
    mobClass: "medicineMobVid"
  }
  const [active, setActive] = useState("first")
  const teams = useSelector(state => state)
  let content
  active === "first" ? content = [
    {
      heading: "Как избежать ошибок на пути к успешному лечению",
      img: icon1,
      p: "Без вспомогательных инструментов шансы пациента выбрать наиболее эффективную клинику/врача на постоянно растущем рынке медицинских услуг сводятся к минимуму."
    },
    {
      img: icon2,
      p: "По статистике в процессе поиска вы просмотрите сайты 5-10 клиник, посетите 1-3 врачебные консультации, но верное решение для каждой проблемы может быть только одно. В открытом доступе нет статистических данных для сравнения эффективности услуг, предоставляемых коммерческой медициной."
    },
    {
      img: icon3,
      p: "После ряда безуспешных визитов и проведенных циклов лечения теряется доверие к врачам и медицине в целом, что в итоге приводит к хронизации процесса."
    }
  ] : content = [
    {
      heading: "Наши решения",
      img: icon1,
      p: "Без вспомогательных инструментов шансы пациента выбрать наиболее эффективную клинику/врача на постоянно."
    },
    {
      img: icon2,
      p: "По статистике в процессе поиска вы просмотрите сайты 5-10 клиник, посетите 1-3 врачебные консультации, но верное решение."
    },
    {
      img: icon3,
      p: "После ряда безуспешных визитов и проведенных циклов лечения теряется доверие к врачам и медицине в целом, что в итоге."
    }
  ]
const contentItems = content.map((contentItem) => (
    <div className={"medicineContentTextItem"}>
      <img src={contentItem.img} alt="icon" className={""}/>
      <p>{contentItem.p}</p>
    </div>
))

  return (
    <div className={teams !== "dark" ? "backgroundMainBlocks medicineMain" : "backgroundMainBlocks medicineMain dark"}>
      <p className={teams !== "dark" ? "headingBlock" : "headingBlock dark"}>Выбирайте медицину осознанно</p>
      <div className={"medicineButtons"}>
        <button className={active === "first" ? "medicineCardButton medicineCardButtonActive" : "medicineCardButton"}
                onClick={() => setActive("first")}>как избежать ошибок
        </button>
        <button className={active === "second" ? "medicineCardButton medicineCardButtonActive" : "medicineCardButton"}
                onClick={() => setActive("second")}>наши решения
        </button>
      </div>
      <div className={"wrapper"}>
        <div className={teams !== "dark" ? "medicineBlockContent" : "medicineBlockContent dark"}>
          <div className={"medicineBlockContentText"}>
            <p className={"medicineBlockContentHeading"}>{content[0].heading}</p>
            {contentItems}
          </div>
          <div className={"medicineVideo"}>
            <Video vid={vid}/>
          </div>
        </div>
      </div>
    </div>
  );
}