import React from "react";
import "./redCardSec.css"
import logoW from "../../img/logoW.png"

export default function RedCardSec () {

  return (
    <div className={"mainRedCardSec"}>
      <div className={"wrapper"}>
        <div className={"redCardSecContent"}>
          <p className={"redCardSecContentText"}>Присоединяйтесь
            и развивайтесь вместе с нами!</p>
          <button className={"redCardSecContentBut"}>присоединится</button>
          <img src={logoW} alt="logo" className={"redCardSecContentImg"}/>
        </div>
      </div>
    </div>
  );
}