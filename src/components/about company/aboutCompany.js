import React from "react";
import "./aboutCompany.css"
import skolkovo from "../../img/skolkovo.png"
import fips from "../../img/FIPS.png"
import ria from "../../img/RIA.png"
import points from "../../img/points.png";
import block from "../../img/WBlokComp.png"
import {useSelector} from "react-redux";


export default function Company () {
const compCont =
  {
    logo: skolkovo,
    heading: "Участник Сколково",
    text: "",
    text1: "Искусственный интеллект,",
    text2:"интегрированный в лечебную работу. Методы, используемые нашей организацией, получили свое признание",
    text3:"в научном мире.",
    text4:"Мы получили",
    text5:"статус участника Сколково",
    text6:"в 2023 году."
  }
const teams = useSelector(state => state)

  return (
    <div className={"noneBackgroundMainBlocks"}>
      <div className={"wrapper"}>
        <p className={teams !== "dark" ? "headingBlock" : "headingBlock dark"}>О компании</p>
        <p className={teams !== "dark" ? "subtittle" : "subtittle dark"}>Признание деятельности нашей компании на
          российском рынке и в научном сообществе:</p>
        <div className={"cardsCompany"}>
          <div className={"cardCompany"}>
            <div className={teams !== "dark" ? "fon" : "fon dark"}>
              <img src={skolkovo} alt="logo company"/>
            </div>

            <div className={teams !== "dark" ? "textCardCompany" : "textCardCompany dark"}>
              <div className={"WBlock"}>
                <img src={block} alt="block"/>
              </div>
              <div className={"wrapHeading"}>
                <img src={points} alt="points"/>
                <p className={"textCardHeading"}> Участник Сколково</p>
              </div>
              <span className={teams !== "dark" ? "companyTextS" : "companyTextS dark"}><p className={"companyTextP"}>Искусственный интеллект,</p> интегрированный в лечебную работу.<br/><br/>
              "Методы, используемые нашей организацией, получили свое признание <p
                  className={"companyTextP"}>в научном мире.</p><br/>
              "Мы получили <p className={"companyTextP"}>статус участника Сколково</p> в 2023 году.</span>
            </div>
          </div>
          <div className={"cardCompany"}>
            <div className={teams !== "dark" ? "fon" : "fon dark"}>
              <img src={fips} alt="logo company"/>
            </div>

            <div className={teams !== "dark" ? "textCardCompany" : "textCardCompany dark"}>
              <div className={"WBlock"}>
                <img src={block} alt="block"/>
              </div>
              <div className={"wrapHeading"}>
                <img src={points} alt="points"/>
                <p className={"textCardHeading"}> Патент</p>
              </div>
              <span className={teams !== "dark" ? "companyTextS" : "companyTextS dark"}><p className={"companyTextP"}>Программное обеспечение</p> для управления и автоматизации работы медицинских процессов <p
                className={"companyTextP"}>на всех этапах </p>
              признана инновационной и запатентована в августе 2023 года.</span>
            </div>
          </div>
          <div className={"cardCompany"}>
            <div className={teams !== "dark" ? "fon" : "fon dark"}>
              <img src={ria} alt="logo company"/>
            </div>

            <div className={teams !== "dark" ? "textCardCompany" : "textCardCompany dark"}>
              <div className={"WBlock"}>
                <img src={block} alt="block"/>
              </div>
              <div className={"wrapHeading"}>
                <img src={points} alt="points"/>
                <p className={"textCardHeading"}> СМИ</p>
              </div>
              <span className={teams !== "dark" ? "companyTextS" : "companyTextS dark"}><p
                className={"companyTextP"}>Синтез</p> академических знаний и конъюнктуры современного <p
                className={"companyTextP"}> рынка медицинских услуг.</p><br/>
              Информационный портал функционирует как <p
                  className={"companyTextP"}>СМИ с 25 декабря 2020 года. </p><br/>
              ЭЛ № ФС 77 - 79982.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}