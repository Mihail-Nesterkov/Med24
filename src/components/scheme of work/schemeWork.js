import React, {useEffect, useState} from "react";
import "./schemeWork.css"
import run from "../../img/run.png";
import {useSelector} from "react-redux";
import Video from "../video/video";
import img from "../../img/schemeVideo.png";
export default function Scheme () {
  const [listH, setListH] = useState(window.screen.width)
  const vid = {
    img: img,
    w: "70px",
    mobClass: "schemeMobVid"
  }
  const teams = useSelector(state => state)
const [active, setActiv] = useState("01")
  const schemeBut = [
    {
      name: "Гарантия",
      num: "01"
    },
    {
      name: "Оплата",
      num: "02"
    },
    {
      name: "Количество клиентов",
      num: "03"
    },
    {
      name: "Коммерческие условия",
      num: "04"
    },
  ]
  let firstCard = []
  switch (active) {
    case "01":
      firstCard = [{
        heading: "Выборка по пациентам",
        text: "Вы можете указать, что готовы брать на лечение пациентов с критериями по каждой патологии.",

        headingS: "Например:",
        textS: "Для процедуры вывод из запоя не старше 50 лет, в анамнезе, чтобы не было употребления наркотиков, и без хронических сердечно сосудистых заболеваний.",
        textS1: "Тем самым получаете выборку только по данным критериям."
      },
        {
        heading: "Выборка по методам лечения и заболеванию",
        text: "Вы можете также указать, что владеете.",
        headingS: "Например:",
        textS: "В лечении геморроя, только методами на 1-2 стадиюгеморроя , методом лигирования.",
        textS1: "Тем самым более тяжелые случаи будут направляться другим участникам."
      }];
    break;
    case "02":
      firstCard = [{
        heading: "222222",
        text: "Вы можете.",
        headingS: "Например:",
        textS: "Для процедуры.",
        textS1: "Тем самым."
      },
        {
        heading: "Выборка",
        text: "Вы можете также.",
        headingS: "Например:",
        textS: "В лечении геморроя.",
        textS1: "Тем самым более."
      }];
      break;
    case "03":
      firstCard = [{
        heading: "Выборка 333",
        text: "Вы можете указать333.",
        headingS: "Например:",
        textS: "Для процедуры вывод из запоя 333.",
        textS1: "Тем самым получаете 333."
      },
        {
        heading: "Выборка по методам 333",
        text: "Вы можете также 333.",
        headingS: "Например:",
        textS: "В лечении геморроя, 333.",
        textS1: "Тем самым более 333."
      }];
      break;
    case "04":
      firstCard = [{
        heading: "Выборка по 444",
        text: "Вы можете указать, 444.",
        headingS: "Например:",
        textS: "Для процедуры вывод 444.",
        textS1: "Тем самым получаете 444."
      },
        {
        heading: "Выборка по методам 444",
        text: "Вы можете также указать, 444.",
        headingS: "Например:",
        textS: "В лечении геморроя, 444.",
        textS1: "Тем самым более тяжелые 444."
      }];
      break;
  }
  const schemeButItems = schemeBut.map((schemeButItem) => (
    <div className={active === schemeButItem.num ? "itemBut active" : "itemBut"}
         onClick={() => setActiv(schemeButItem.num)} key={schemeButItem.name}>
      <div>
        <p className={"nameBut"}>{schemeButItem.name}</p>
      </div>
      <div className={"dNumBut"}>
        <p className={"numBut"}>{schemeButItem.num}</p>
      </div>
    </div>
  ));
  const cards = firstCard.map((card) => (
    <>
      <div className={teams !== "dark" ? "line" : "line dark"}></div>
      <div className={"card"}>
        <p className={teams !== "dark" ? "cardHeading" : "cardHeading dark"}>{card.heading}</p>
        <p className={teams !== "dark" ? "cardText1" : "cardText1 dark"}>{card.text}</p>
        <div className={"cardPing"}>
          <p className={teams !== "dark" ? "cardHeading2" : "cardHeading2 dark"}>{card.headingS}</p>
          <p className={teams !== "dark" ? "cardText2" : "cardText2 dark"}>{card.textS}</p>
          <br/>
          <p className={teams !== "dark" ? "cardText2" : "cardText2 dark"}>{card.textS1}</p>
        </div>
      </div>
    </>
  ));
  return (
    <div className={teams !== "dark" ? "backgroundMainBlocks" : "backgroundMainBlocks dark"}>
      <div className={"wrapper"}>
        <div className={"mainSchemeCard"}>
          <div className={"up"}>
            <div className={"upLeft"}>
              <span className={teams !== "dark" ? "headingBlock upLeftHeading" : "headingBlock upLeftHeading dark"}>Схема работы платформы <p>med.info</p></span>
              <p className={teams !== "dark" ? "upLeftText" : "upLeftText dark"}>Для начала работы с нами Вам необходимо
                указать заболевания, выбрать методы
                лечения и стоимость. Уточнить условия проведения лечения или критерии ограничений. Например возраст или
                наличие заболеваний у пациента как противопоказание. Заполняются контактные данные: местоположения,
                время
                работы</p>
            </div>
            {window.screen.width > 360 ? <Video vid={vid}/> : <></>}
          </div>
          {window.screen.width < 801 ? <div className={"ItemsBut"}>
            {schemeButItems}
          </div> : <></>}
          <div className={teams !== "dark" ? "contentScheme" : "contentScheme dark"}>
            {window.screen.width > 800 ? <div className={"ItemsBut"}>
            {schemeButItems}
          </div> : <></>}

            <div className={"cards"}>
              {cards}
            </div>
          </div>
          {window.screen.width < 361 ? <Video vid={vid}/> : <></>}
        </div>
      </div>
    </div>
  );
}