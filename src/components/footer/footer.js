import React from "react";
import "./footer.css"
import logoW from "../../img/logoW.png"
import Tel from "../tel/tel";
import icon from "../../img/iconWNight.png"

export default function Footer () {
const sty = {
  color: "#FFFFFF",
  backgroundCol: "#444444",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  img: icon
}
  return (
    <div className={"footer"}>
      {/*<div className={"footerContent"}>*/}
        <div className={"footerWrapp"}>
          <img src={logoW} alt="logo" className={"logoFooter"}/>
          <Tel sty={sty}/>
        </div>
      {/*</div>*/}
    </div>
  );
}