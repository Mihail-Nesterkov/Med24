import React, {useState} from "react";
import "./tools.css"
import toolsContentImg from "../../img/tools/toolsContent.png"
import {useSelector} from "react-redux";

export default function Tools () {
  const teams = useSelector(state => state)
const [active, setActive] = useState("01")
  const toolsButt = [
    {
      num: "01",
      heading: "Диагностические исследования"
    },
    {
      num: "02",
      heading: "Лабораторные иследования"
    },
    {
      num: "03",
      heading: "Перенаправление пациентов"
    },
    {
      num: "04",
      heading: "Баанковские рассрочки"
    }
  ]
  let itemsButtText = {}
  switch (active) {
    case "01":
      itemsButtText =
        {
          heading: "Проведение диагностических исследований у наших партнеров. Бонусные выплаты за направление.",
          text: "Сегодня для взятые на лечение по тому или иному методу иногда требуется провести ряд манипуляций для уточнения или исключения других патологий. Работая в одной сети, вы можете направлять на дорогостоящие диагностические манипуляции и получать выплаты. Например: Мрт, колоноскопия и т.д",
        };
      break;
    case "02":
      itemsButtText =
        {
          heading: "Проведение лабораторных исследований у наших партнеров.",
          text: "Сегодня для взятые на лечение по тому или иному методу иногда требуется провести ряд манипуляций для уточнения или исключения других патологий. Работая в одной сети, вы можете направлять на дорогостоящие диагностические манипуляции и получать выплаты. Например: Мрт, колоноскопия и т.д",
        };
      break;
    case "03":
      itemsButtText =
        {
          heading: "Перенаправление пациентов.",
          text: "Сегодня для взятые на лечение по тому или иному методу иногда требуется провести ряд манипуляций для уточнения или исключения других патологий. Работая в одной сети, вы можете направлять на дорогостоящие диагностические манипуляции и получать выплаты. Например: Мрт, колоноскопия и т.д",
        };
      break;
    case "04":
      itemsButtText =
        {
          heading: "Банковские рассрочки.",
          text: "Сегодня для взятые на лечение по тому или иному методу иногда требуется провести ряд манипуляций для уточнения или исключения других патологий. Работая в одной сети, вы можете направлять на дорогостоящие диагностические манипуляции и получать выплаты. Например: Мрт, колоноскопия и т.д",
        };
      break;
  }
  const toolsButItems = toolsButt.map((toolButItem) => (
    <div className={active === toolButItem.num ? "toolsButton toolsButtonActive" : "toolsButton"} onClick={() => setActive(toolButItem.num)} key={toolButItem.heading}>
      <p className={teams !== "dark" ? "toolsButtonNum" : "toolsButtonNum dark"}>{toolButItem.num}</p>
      <div className={teams !== "dark" ? "dash" : "dash dark"}></div>
      <p className={teams !== "dark" ? "toolsButtonHead" : "toolsButtonHead dark"}>{toolButItem.heading}</p>
    </div>
  ))
  return (
    <div className={"noneBackgroundMainBlocks"}>
      <div className={"wrapper"}>
        <p
          className={teams !== "dark" ? "headingBlock mainToolsHeading" : "headingBlock mainToolsHeading dark"}>Инструменты,
          обеспечивающие проведение полного цикла лечения пациента.</p>
        <p className={teams !== "dark" ? "subtittle" : "subtittle dark"}>Лояльность цен наших поставщиков для пациентов
          и врачей. С нами дешевле и выгоднее.</p>
        <div className={"toolsButtons"}>
          {toolsButItems}
        </div>
        <div className={teams !== "dark" ? "itemButtText" : "itemButtText dark"}>
          <p className={"itemButtTextHeading"}>{itemsButtText.heading}</p>
          <p className={"itemButtTextSub"}>{itemsButtText.text}</p>
        </div>
        <div className={"toolsContent"}>
          <div className={"leftToolsContent"}>
            <p className={"toolsHeadingTextP"}><span className={"toolsHeadingTextS"}>Аналитические решения </span>для
              улучшения результатов финансовой и клинической деятельности.</p>
            <div className={"toolsSeparation"}></div>
            <p className={"toolsContentText"}>Проработка и структуризация отрицательных результатов.<br/><br/>
              Классификация как положительных, так и отрицательных случаев в соответствии с клиническими рекомендациями.<br/><br/>
              На основе анализа удовлетворенности работой конкретной клиники и лечащего врача искусственный интеллект
              помогает найти нужное решение и дает рекомендации. <br/><br/>
              Такой подход позволяет усилить эффективность лечебной работы.</p>
          </div>
          <div className={"rightToolsContent"}>
            <img src={toolsContentImg} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}