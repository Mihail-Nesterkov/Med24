import React from "react";
import "./banner.css"
import banner from "../../img/banner.jpg";
import folderIcon1 from "../../img/client/banner/iconFolder1.png"
import folderIcon2 from "../../img/client/banner/iconFolder2.png"
import folderIcon3 from "../../img/client/banner/iconFolder3.png"
import folderIcon4 from "../../img/client/banner/iconFolder4.png"
import folderIcon5 from "../../img/client/banner/iconFolder5.png"
import folderIcon6 from "../../img/client/banner/iconFolder6.png"
import bookmark from "../../img/client/banner/bookmarkFolder.png"
import {useSelector} from "react-redux";

export default function Banner (props) {
  const teams = useSelector(state => state)

const satting = props.ban
    let sub
    if (satting.subt.length > 1) sub = <p className={"subtittleBanner"}>{satting.subt}</p>
    let clin
    if (satting.subt.length < 1) {
      clin = <div className={"bannerBlockContent"}>
        <p className={"headerBlockContent"}>{satting.headerCon}</p>
        <p className={"bannerTextP"}>med.info<span className={"bannerTextS"}> - платформа для поиска медицинского специалиста, лечебного учреждения или метода лечения, объединяющая работу множества медицинских учреждений.<br/><br/>
Выбор специалиста и метода лечения базируется на данных центра статистики и доказательной медицины с помощью искусственного интеллекта.</span>
        </p>
        <button className={"bannerContentBut"}>Узнать подробнее</button>
      </div>
    } else {
      clin = <></>
    }

  return (
    <div className={"mainBanner"} style={{backgroundImage: `url(${satting.img})`}}>
      <div className={"onBanner"}></div>
      <div className={"wrapper"}>
      <div className={"bannerContentBlok"}>
        {clin}
        <div className={"bannerBlock"} style={{marginTop: satting.subt.length < 1 ? "113px" : "0"}}>
          <p className={"headerBanner"}>{satting.heading}</p>
          {sub}
          <form className={"searchBanner"}>
            <input type="text" placeholder={"Врач / Услуга / заболевание"}/>
            <button>найти</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}