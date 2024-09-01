import React from "react";
import "./redCard.css"
import icon1 from "../../img/redIcon1.png"
import icon2 from "../../img/redIcon2.png"
import icon3 from "../../img/redIcon3.png"
import {useSelector} from "react-redux";

export default function RedCard () {
  const teams = useSelector(state => state)
  const redContent = [
    {
      icon: icon1,
      redItemDisc: "Предоставление профильного потока пациентов с оплатой после выполненной медицинской манипуляции."
    },
    {
      icon: icon2,
      redItemDisc: "Обеспечение инструментами \n" +
        "для полного цикла лечения \n" +
        "с выгодными условиями сотрудничества."
    },
    {
      icon: icon3,
      redItemDisc: "Оптимизация через анализ. Аналитические решения для улучшения результатов финансовой и клинической деятельности."
    }
  ]
  const redItems = redContent.map((redItem) => (
      <div className={"item"} key={redItem.redItemDisc}>
        <img src={redItem.icon} alt="icon"/>
        <p className={teams !== "dark" ? "textRedContent" : "textRedContent dark"}>{redItem.redItemDisc}</p>
      </div>

  ));
  return (
    <div className={"mainRed"}>
      <div className={"itemsRed"}>
        {redItems}
      </div>
    </div>
  );
}