import React, {useState} from "react";
import "./doctor's.css"
import {useSelector} from "react-redux";
import {store} from "../../../redux/store";
import doctorsVideo from "../../../img/client/doctors/doctorsVideo.png"
import Video from "../../video/video";

export default function DoctorS () {
  const [active, setActive] = useState(1)
  const teams = useSelector(state => state)
  const vid = {
    img: doctorsVideo,
    p1: "Посмотрите подробное видео о нашей платформе",
    p2: "5 минут 12 секунд",
    w: "110px",
    mobClass: "doctorsMobVid"
  }
  const nav = [
    {
      name: "Стоимость лечения",
      num: 1
    },
    {
      name: "Географическая доступность",
      num: 2
    },
    {
      name: "Эффективность результата лечения",
      num: 3
    },
    {
      name: "Расширенные функции выбора метода лечения",
      num: 4
    }
  ]
  const contentText = [
    {
      p1: <div className={"doctorsText"}><p className={"doctorsTextP"}><span className={"doctorsTextS"}>Стоимость проведенных медицинских вмешательств</span> фиксируется
        и накапливается в базе данных. Далее эта информация используется в алгоритмах выбора лечения.</p><br/>
        <p className={"doctorsTextP"}>Этот метод <span className={"doctorsTextS"}>помогает оптимизировать выбор методов лечения, </span>с
          учетом финансовых аспектов и приводит к более эффективному экономическому подходу.</p></div>,
      p2: <div className={"doctorsText"}><p className={"doctorsTextP"}>Также в своей работе <span className={"doctorsTextS"}>мы оцениваем показатели</span> эффективности и скорости восстановления, которые влияют на стоимость лечения.</p><br/>
        <p className={"doctorsTextP"}><span className={"doctorsTextS"}>Эффективные методы лечения</span> приводят к более быстрому выздоровлению и более низкому риску процента осложнений снижению симптомов заболевания, что позволяет пациенту вернуться к нормальной жизни быстрее.</p><br/>
        <p className={"doctorsTextP"}>Однако эффективные методы часто требуют более совершенных технологий, более дорогого оборудования или специализированных навыков медицинских работников, что может повлиять на их стоимость.</p></div>,
      p3: <p className={"doctorsTextP"}><span className={"doctorsTextS"}>С другой стороны,</span> менее продуктивные методы требуют более длительного лечения и экономически выгоднее.</p>,
      p4: <p className={"doctorsTextP"}>Не стоит также забывать что <span className={"doctorsTextS"}>у каждого метода есть свои критерии,</span> под которые должен подойти пациент, поэтому на платформе представлены широкий спектр методов лечения актуальных сегодня.</p>,
      vid: vid
    },
    {
      p1: <div className={"doctorsText"}><p className={"doctorsTextP"}><span className={"doctorsTextS"}>Географическая доступность</span> фиксируется
        и накапливается в базе данных. Далее эта информация используется </p><br/>
        <p className={"doctorsTextP"}>Этот метод <span className={"doctorsTextS"}>помогает оптимизировать выбор методов лечения, </span>с
          учетом финансовых аспектов и приводит к более эффективному экономическому подходу.</p></div>,
      p2: <div className={"doctorsText"}><p className={"doctorsTextP"}>Также в своей работе <span className={"doctorsTextS"}>мы оцениваем показатели</span> эффективности и скорости восстановления, которые влияют на стоимость лечения.</p><br/>
        <p className={"doctorsTextP"}><span className={"doctorsTextS"}>Эффективные методы лечения</span> приводят к более быстрому выздоровлению и более низкому риску процента осложнений снижению симптомов заболевания, что позволяет пациенту вернуться к нормальной жизни быстрее.</p><br/>
        <p className={"doctorsTextP"}>Однако эффективные методы часто требуют более совершенных технологий, более дорогого оборудования или специализированных навыков медицинских работников, что может повлиять на их стоимость.</p></div>,
      p3: <p className={"doctorsTextP"}><span className={"doctorsTextS"}>С другой стороны,</span> менее продуктивные методы требуют более длительного лечения и экономически выгоднее.</p>,
      p4: <p className={"doctorsTextP"}>Не стоит также забывать что <span className={"doctorsTextS"}>у каждого метода есть свои критерии,</span> под которые должен подойти пациент, поэтому на платформе представлены широкий спектр методов лечения актуальных сегодня.</p>,
      vid: vid
    },
    {
      p1: <div className={"doctorsText"}><p className={"doctorsTextP"}><span className={"doctorsTextS"}>Эффективность результата лечения</span> фиксируется
        и накапливается в базе данных. Далее эта информация используется в алгоритмах </p><br/>
        <p className={"doctorsTextP"}>Этот метод <span className={"doctorsTextS"}>помогает оптимизировать выбор методов лечения, </span>с
          учетом финансовых аспектов и приводит к более эффективному экономическому подходу.</p></div>,
      p2: <div className={"doctorsText"}><p className={"doctorsTextP"}>Также в своей работе <span className={"doctorsTextS"}>мы оцениваем показатели</span> эффективности и скорости восстановления, которые влияют на стоимость лечения.</p><br/>
        <p className={"doctorsTextP"}><span className={"doctorsTextS"}>Эффективные методы лечения</span> приводят к более быстрому выздоровлению и более низкому риску процента осложнений снижению симптомов заболевания, что позволяет пациенту вернуться к нормальной жизни быстрее.</p><br/>
        <p className={"doctorsTextP"}>Однако эффективные методы часто требуют более совершенных технологий, более дорогого оборудования или специализированных навыков медицинских работников, что может повлиять на их стоимость.</p></div>,
      p3: <p className={"doctorsTextP"}><span className={"doctorsTextS"}>С другой стороны,</span> менее продуктивные методы требуют более длительного лечения и экономически выгоднее.</p>,
      p4: <p className={"doctorsTextP"}>Не стоит также забывать что <span className={"doctorsTextS"}>у каждого метода есть свои критерии,</span> под которые должен подойти пациент, поэтому на платформе представлены широкий спектр методов лечения актуальных сегодня.</p>,
      vid: vid
    },
    {
      p1: <div className={"doctorsText"}><p className={"doctorsTextP"}><span className={"doctorsTextS"}>Расширенные функции выбора метода</span> фиксируется
        и накапливается в базе данных.</p><br/>
        <p className={"doctorsTextP"}>Этот метод <span className={"doctorsTextS"}>помогает оптимизировать выбор методов лечения, </span>с
          учетом финансовых аспектов и приводит к более эффективному экономическому подходу.</p></div>,
      p2: <div className={"doctorsText"}><p className={"doctorsTextP"}>Также в своей работе <span className={"doctorsTextS"}>мы оцениваем показатели</span> эффективности и скорости восстановления, которые влияют на стоимость лечения.</p><br/>
        <p className={"doctorsTextP"}><span className={"doctorsTextS"}>Эффективные методы лечения</span> приводят к более быстрому выздоровлению и более низкому риску процента осложнений снижению симптомов заболевания, что позволяет пациенту вернуться к нормальной жизни быстрее.</p><br/>
        <p className={"doctorsTextP"}>Однако эффективные методы часто требуют более совершенных технологий, более дорогого оборудования или специализированных навыков медицинских работников, что может повлиять на их стоимость.</p></div>,
      p3: <p className={"doctorsTextP"}><span className={"doctorsTextS"}>С другой стороны,</span> менее продуктивные методы требуют более длительного лечения и экономически выгоднее.</p>,
      p4: <p className={"doctorsTextP"}>Не стоит также забывать что <span className={"doctorsTextS"}>у каждого метода есть свои критерии,</span> под которые должен подойти пациент, поэтому на платформе представлены широкий спектр методов лечения актуальных сегодня.</p>,
      vid: vid
    }
  ]
  const navItems = nav.map((navItem) => (
    <div className={active === navItem.num ? "itemNav itemNavActive" : "itemNav"} onClick={() => setActive(navItem.num)}>
      <p className={"textNav"}>{navItem.name}</p>
      <p>&#183;&#183;<span>0{navItem.num}</span></p>
    </div>
  ))
  return (
    <div className={teams !== "dark" ? "noneBackgroundMainBlocks" : "noneBackgroundMainBlocks dark"}>
      <div className={"wrapper wrapperDoctors"}>
      <p className={teams !== "dark" ? "headingBlock" : "headingBlock dark"}>Основные критерии по которым клиенты выбирают врача:</p>
      <p className={teams !== "dark" ? "subtittle" : "subtittle dark"}>Учитываемые параметры в работе алгоритмов платформы</p>
      <div className={teams !== "dark" ? "doctorsContentBlock" : "doctorsContentBlock dark"}>
        <div className={"doctorsContentNav"}>
          {navItems}
        </div>
        <div className={"doctorsCntentText"}>
          {contentText[active - 1].p1}
          <Video vid={contentText[active - 1].vid}/>
          {contentText[active - 1].p2}
          <div className={"doctorsContentCard"}>
            {contentText[active - 1].p3}
            {contentText[active - 1].p4}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}