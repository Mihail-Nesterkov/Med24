import React, {useState} from "react";
import "./client.css"
import {useSelector} from "react-redux";
import Banner from "../../components/banner/banner";
import bannerimg from "../../img/bannerClient.png";
import Direction from "../../components/client/direction/direction";
import Medicine from "../../components/client/medicine is conscious/medicine";
import DoctorS from "../../components/client/doctor's choice/doctor's";
import What from "../../components/What makes us different/what";
import factsVideo from "../../img/client/facts/factsVideo.png"
import Interaction from "../../components/client/interaction/interaction";
import Folders from "../../components/folders/folders";

export default function Client () {
  const teams = useSelector(state => state)
  // const [sN, setSN] = useState(false)
  const ban = {
    img: bannerimg,
    heading: "Лучшие решения по единому медицинскому стандарту",
    subt: "",
    headerCon: "Ваш проводник в медицине"
  }
  const navItems = [
    {
      num: 1,
      name: "Субъективность восприятия",
      description: "Восприятие каждым пациентом может отличаться в зависимости от его личного опыта, ожиданий и настроения.",
      img: factsVideo
    },
    {
      num: 2,
      name: "Непредставительная выборка",
      description: "Непредставительная. выборка Применимая модель позволила достичь оборота до 20 млн в течении года в одной из сфер медицины.",
      img: factsVideo
    },
    {
      num: 3,
      name: "Неоднородность опыта",
      description: "Неоднородность опыта Применимая модель позволила достичь оборота до 20 млн в течении года в одной из сфер медицины.",
      img: factsVideo
    },
    {
      num: 4,
      name: "Эмоциональное состояние",
      description: "Эмоциональное состояние Применимая модель позволила достичь оборота до 20 млн в течении года в одной из сфер медицины.",
      img: factsVideo
    },
    {
      num: 5,
      name: "Скрытая мотивация",
      description: "Скрытая мотивация Применимая модель позволила достичь оборота до 20 млн в течении года в одной из сфер медицины.",
      img: factsVideo
    },
    {
      num: 6,
      name: "Несоответствие ожиданий",
      description: "Несоответствие ожиданий Применимая модель позволила достичь оборота до 20 млн в течении года в одной из сфер медицины.",
      img: factsVideo
    },
  ]
  const block =
    {
      header: "Неучитываемые факторы при работе платформы",
      sub: "Разумеется, речь не идет о случаях врачебной ошибки и халатности."
    }
    const headerBlock = {
      header: "ОТЗЫВЫ",
      sub: "Пациенты обычно учитывают общий контекст отзывов, сравнивая положительные и отрицательные аспекты, чтобы получить более объективное представление о враче и его подходе к практике. Все эти факторы делают отзывы важными, но не всегда исчерпывающими и объективными источниками информации о враче.",
      sub1: "Отзывы о врачах могут быть оценкой, лишенной полного объективизма, по нескольким причинам:"
    }
    const styleNavLi = {
    textWrap: "balance"
    }
  return (
    <div className={teams !== "dark" ? "mainClient" : "mainClient dark "}>
      <Banner ban={ban}/>
      <Folders ban={ban}/>
      <Direction/>
      <Medicine/>
      <DoctorS/>
      <What navItems={navItems}
            block={block}
            headerBlock={headerBlock}
            styleNavLi={styleNavLi}
      />
      {/*<Interaction/>*/}
    </div>
  )
}