import React, {useState} from "react";
import points from "../../img/points.png";
import run from "../../img/run.png";
import cardImg1 from "../../img/cardImg1.jpg";
import "./expenses.css"
import {useSelector} from "react-redux";

export default function Expenses () {
  const teams = useSelector(state => state)
  const [active, setActive] = useState("first")
  let medUpr = {}
  switch (active) {
    case "first" :
      medUpr = {
        heading: "Медицинским учреждениям",
        point1: "Медицинским работникам",
        point2: "Врачам",
        point3: "Среднему медицинскому персоналу:",
        point4: "фельдшера, медицинские сестры"
      };
      break;
    case "second":
      medUpr = {
        heading: "Утправление и аналитика",
        point1: "111",
        point2: "222",
        point3: "333:",
        point4: "444"
      };
      break;
  }
  const but = [
    {
      name: "first",
      discrip: "медицинским учреждениям"
    },
    {
      name: "second",
      discrip: "утправление и аналитика"
    }
  ]
  const butItems = but.map((butItem) => (
    <button className={active === butItem.name ? "active" : ""} onClick={() => setActive(butItem.name)} key={butItem.discrip}>{butItem.discrip}</button>
  ))
  return (
    <div className={"noneBackgroundMainBlocks card"}>
      <div className={"wrapper"}>
        <p className={teams !== "dark" ? "headingBlock" : "headingBlock dark"}>Снижение затрат, повышение эффективности.
        </p>
        <p className={teams !== "dark" ? "headingBlock" : "headingBlock dark"}>Приглашаем к сотрудничеству для
          оптимизации вашей клиники.</p>
        <div className="block">
          <div className={teams !== "dark" ? "onBlock" : "onBlock dark"}>
            <p>Для кого</p>
            <p>Предназначено как для работы в сфере здравоохранения с целью улучшения показателей медицинской
              деятельности, так и для оптимизации коммерческих процессов</p>
            <div className={"onBlockBut"}>
              {butItems}
            </div>
          </div>
          <div className="cardContent">
            <div className={teams !== "dark" ? "content" : "content dark"}>
              <p className={teams !== "dark" ? "headingContent" : "headingContent dark"}>{medUpr.heading}</p>
              <p className={teams !== "dark" ? "textContent" : "textContent dark"}><img src={points}
                                                                                        alt="points"/>{medUpr.point1}
              </p>
              <p className={teams !== "dark" ? "textContent" : "textContent dark"}><img src={points}
                                                                                        alt="points"/>{medUpr.point2}
              </p>
              <p className={teams !== "dark" ? "textContent" : "textContent dark"}><img src={points}
                                                                                        alt="points"/>{medUpr.point3}
              </p>
              <span>{medUpr.point4}</span>
              <div className="runVideo">
                <button className={"run"}><img src={run} alt="run"/></button>
                <p>Посмотрите подробное видео о нашей платформе</p>
              </div>
            </div>
            <div>
              <img src={cardImg1} alt="card image" className={"expensesVideo"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}