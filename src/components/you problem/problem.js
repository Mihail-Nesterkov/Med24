import React, {useState} from "react";
import "./problem.css"
import run from "../../img/run.png";
import {useSelector} from "react-redux";
import Video from "../video/video";
import img from "../../img/problemImg.jpg"

export default function Problem () {
  const teams = useSelector(state => state)
  const [active, setActive] = useState("01")

  const vid =
    {
      img: img,
      text1: "",
      text2: "",
      w: "97px",
      h: "97px",
      mobClass: "problemMobVid"
    }

  const tabs = [
    {
      number: "01",
      tems: "Поиск пациентов"
    },
    {
      number: "02",
      tems: "Медицинские расходы"
    },
    {
      number: "03",
      tems: "Третья проблема"
    },
    {
      number: "04",
      tems: "Четвертая проблема"
    }
  ]
  let discr = {}
  switch (active) {
    case "01":
      discr = {
        heading: "Эффективный поиск пациентов с минимальными рекламными затратами",
        p1: "Решение",
        p2: "Наши передовые методы анализа данных и машинного обучения позволят точно определить потенциальных пациентов, снизив расходы на рекламу и увеличив конверсию."
      };
      break;
    case "02":
      discr = {
        heading: "Медицинские расходы",
        p1: "Решение",
        p2: "контент медицинских расходов"
      };
      break;
    case "03":
      discr = {
        heading: "третья проблема",
        p1: "Решение",
        p2: "контент третьей проблемы"
      };
      break;
    case "04":
      discr = {
        heading: "четвертая проблема",
        p1: "Решение",
        p2: "контент четвертой проблемя"
      };
      break;
  }
  const tabsItem = tabs.map((tabsNumItem) => (
    <div className={active === tabsNumItem.number ? "tabsItem active" : "tabsItem"} id={teams !== "dark" ? "problemItem" : "problemItemDark"} onClick={() => setActive(tabsNumItem.number)} key={tabsNumItem.tems}>
      <div className={"tabsItemNumber"}>
        <p className={"textNumber"}>Проблема</p>
        <p className={"problemNumber"}>{tabsNumItem.number}</p>
      </div>
      <p className={teams !== "dark" ? "tabsTems" : "tabsTems dark"}>{tabsNumItem.tems}</p>
    </div>
  ))


  return (
    <div className={teams !== "dark" ? "backgroundMainBlocks" : "backgroundMainBlocks dark"}>
      <p className={teams !== "dark" ? "headingBlock" : "headingBlock dark"}>Ваши проблемы - наши решения</p>
      <div className={"wrapper"}>
        <div className="problemContent">
          <div className={"tabs"}>
            {tabsItem}
          </div>
          <div className={teams !== "dark" ? "contentProblem" : "contentProblem dark"}>
            <Video vid={vid}/>
            <div className={"descriptionProblem"}>
              <p className={teams !== "dark" ? "headingProblem" : "headingProblem dark"}>{discr.heading}</p>
              <div className={teams !== "dark" ? "textProblem" : "textProblem dark"}>
                <p>{discr.p1}</p>
                <p>{discr.p2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}