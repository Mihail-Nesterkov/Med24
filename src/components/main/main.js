import React from "react";
import banner from "../../img/mainBanner.jpg"
import logoW from "../../img/logoW.png"
import "./main.css"
import {useSelector} from "react-redux";
export default function Main () {
  const teams = useSelector(state => state);
  return (
    <div className={teams === "light" ?"main" : "main dark"}>
      {teams === "light" ? <img src={banner} alt="banner" /> : <img src={logoW} alt="banner" />}

    </div>
  );
}