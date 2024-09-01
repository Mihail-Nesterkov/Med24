import React from "react";
import "./interaction.css"
import Video from "../../video/video";
import interVideo from "../../../img/client/interection/interectionVideo.png"
import {useSelector} from "react-redux";

export default function Interaction () {
  const teams = useSelector(state => state)
  const vid = {
    img: interVideo,
    w: "70px",
    mobClass: "whatMobVid"
  }
  return (
    <div className={teams !== "dark" ? "backgroundMainBlocks backgroundInteraction" : "backgroundMainBlocks backgroundInteraction dark"}>
      <div className={"wrapper"}>
      {/*<div className={teams !== "dark" ? "interactionMain mainBlockContent" : "interactionMain mainBlockContent dark"}>*/}
      {/*  <div className={"interactionContent"}>*/}
      {/*    <p className={"whatBlockContentTextHeader"}>Взаимодействие и коммуникация:</p>*/}
      {/*    <p className={teams !== "dark" ? "subtittle" : "subtittle dark"}>Коммуникация между врачом и пациентом – это сложный инструмент с разнообразными*/}
      {/*      эффектами. Врач с низкими навыками коммуникации может быть успешным благодаря высокой компетентности, но*/}
      {/*      также может сложиться и обратная ситуация. Объективную оценку эффективности работы дать может только*/}
      {/*      статистика.</p>*/}
      {/*  </div>*/}
      {/*  <div className={"interactionVideo"}>*/}
      {/*    <Video vid={vid}/>*/}
      {/*  </div>*/}

      {/*</div>*/}
      </div>
    </div>
  );
}