import React, {useState} from "react";
import "./partners.css"
import partnersCard from "../../img/partners/partnersCard.png"
import {useSelector} from "react-redux";
export default function Partners () {
  const teams = useSelector(state => state)
  const [active, setActive] = useState(false)
const partnersCards = [
  {
    img: partnersCard
  },
  {
    img: partnersCard
  },
  {
    img: partnersCard
  },
  {
    img: partnersCard
  },
  {
    img: partnersCard
  },
  {
    img: partnersCard
  },
  {
    img: partnersCard
  },
  {
    img: partnersCard
  },
]
  const partnersCarditems = partnersCards.map((partnersCardItem, index) => (

    <div className={"partnersCard"} key={index + `p`}>
      <img src={partnersCardItem.img}  alt="icon partner"/>
    </div>
  ))
  return (
    <div className={"noneBackgroundMainBlocks"}>
      <div className={"wrapper"}>
      <p className={teams !== "dark" ? "headingBlock" : "headingBlock dark"}>Наши партнеры</p>
      <p className={teams !== "dark" ? "subtittle" : "subtittle dark"}>В рамках платформы med.info функционируют крупные федеральные поставщики услуг,<br/>
        медицинские региональные сети клиник и лучшие врачи</p>
      <div className={active === true ? "partnersCards" : "partnersCards partnersCardsAll"}>
        {partnersCarditems}
      </div>
      <p className={"partnersButtonAll"} onClick={() => setActive(!active)}>{active === false ? "показать всех" : "скрыть"}</p>
      </div>
    </div>
  )
}