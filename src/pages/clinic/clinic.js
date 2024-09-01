import React from "react";
import banner from "../../img/banner.jpg"
import "./clinic.css"
import Problem from "../../components/you problem/problem";
import Expenses from "../../components/expenses/expenses";
import RedCard from "../../components/red card/redCard";
import Company from "../../components/about company/aboutCompany";
import Scheme from "../../components/scheme of work/schemeWork";
import Call from "../../components/call centr/call";
import Economics from "../../components/the economics/economics";
import Tools from "../../components/tools/tools";
import What from "../../components/What makes us different/what";
import Partners from "../../components/partners/partners";
import RedCardSec from "../../components/red card second/redCardSec";
import {useSelector} from "react-redux";
import Banner from "../../components/banner/banner";
import bannerimg from "../../img/banner.jpg";
import video from "../../img/what/whatVideo.png"
export default function Clinic () {
const teams = useSelector(state => state)
    const ban = {
        img: bannerimg,
        heading: "Эффективный инструмент управления и аналитики",
        subt: "впервые объединяющий интересы врача и пациента на основе Искусственного Интеллекта"
    }
    const navItems = [
        {
            num: 1,
            name: "Финансовая обоснованность",
            description: "Применимая модель позволила достичь оборота до 20 млн в течении года в одной из сфер медицины.",
            img: video
        },
        {
            num: 2,
            name: "Экспертиза",
            description: "Применимая модель позволила достичь оборота до 20 млн в течении года в одной из сфер медицины.",
            img: video
        },
        {
            num: 3,
            name: "География",
            description: "Применимая модель позволила достичь оборота до 20 млн в течении года в одной из сфер медицины.",
            img: video
        },
        {
            num: 4,
            name: "Анонимность",
            description: "Применимая модель позволила достичь оборота до 20 млн в течении года в одной из сфер медицины.",
            img: video
        },
        {
            num: 5,
            name: "Безопасность IT",
            description: "Применимая модель позволила достичь оборота до 20 млн в течении года в одной из сфер медицины.",
            img: video
        },
        {
            num: 6,
            name: "Руководитель",
            description: "Применимая модель позволила достичь оборота до 20 млн в течении года в одной из сфер медицины.",
            img: video
        },
    ]
    const block =
        {
            header: "Что нас отличает",
            sub: ""
        }
        const styleNav = {
            overflowX: "hidden"
        }
  return (
    <div className={teams !== "dark" ? "mainClient" : "mainClient dark "}>
      <Banner ban={ban}/>
      <Expenses/>
      <Problem/>
      <RedCard/>
      <Company/>
      <Scheme/>
      <Call/>
      <Economics/>
      <Tools/>
      <What
        navItems={navItems}
        block={block}
        styleNav={styleNav}
      />
      <Partners/>
      <RedCardSec/>
    </div>
  );
}