import React from "react";
import "./folders.css"
import bookmark from "../../img/client/banner/bookmarkFolder.png";
import folderIcon1 from "../../img/client/banner/iconFolder1.png";
import folderIcon2 from "../../img/client/banner/iconFolder2.png";
import folderIcon3 from "../../img/client/banner/iconFolder3.png";
import folderIcon4 from "../../img/client/banner/iconFolder4.png";
import folderIcon5 from "../../img/client/banner/iconFolder5.png";
import folderIcon6 from "../../img/client/banner/iconFolder6.png";
import {useSelector} from "react-redux";

export default function Folders (props) {
  const teams = useSelector(state => state)
  const satting = props.ban
  const folders = [
    {
      img: folderIcon1,
      textP: "Сравнивайте",
      textS: " цены на лечение"
    },
    {
      img: folderIcon2,
      textP: "Выбирайте",
      textS: " врача по показателям его результативности"
    },
    {
      img: folderIcon3,
      textP: "Получайте",
      textS: " информацию об альтернативных методах лечения"
    },
    {
      img: folderIcon4,
      textP: "Находите",
      textS: " возможные способы лечения в своем городе или по всей стране"
    },
    {
      img: folderIcon5,
      textP: "Оформляйте",
      textS: " беспроцентную рассрочку на лечение от ведущих банков"
    },
    {
      img: folderIcon6,
      textP: "Консультируйтесь ",
      textS: "у координатора по телефону"
    }
  ];

  let folderItems
  if (satting.subt.length < 1) folderItems = folders.map((folderItem) => (
    <div className={"bannerFolder"} key={folderItem.textS}>
      <div className={"iconFolder"}>
        <img src={folderItem.img} alt=""/>
      </div>
      <img src={bookmark} alt="bookmark" className={"folderBookmark"}/>
      <div className={teams !== "dark" ? "textFolder" : "textFolder dark"}>
        <p className={"bannerFolderTextP"}>{folderItem.textP}<span className={"bannerFolderTextS"}>{folderItem.textS}</span></p>
      </div>
    </div>

  ))
  return (
    <div className={"wrapper"}>
      <div className={"folders"}>
        {folderItems}
      </div>
    </div>
  )
}