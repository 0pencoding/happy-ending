import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SeparatedTemplate25 from "../Templates/SeparatedTemplate25";
import P25_Video from "../../assets/videos/25-death.mp4";

import "../../scss/pages.scss";

function P25({ history }) {
  const year = localStorage.getItem("deathYear");
  const month = localStorage.getItem("deathMonth");
  const day = localStorage.getItem("deathDay");
  const name = localStorage.getItem("name") ?? "홍길동";
  const click = useRef(false);

  useEffect(() => {
    setTimeout(() => click.current = true, 3000);
  }, []);

  const onClick = (e) => {
    if (!click.current)
      e.preventDefault();
  };
  
  const goBack = () => {
    history.goBack();
  };

  const data = {
    h3_data: "D-DAY",
    span1_data: `${name} 님은`,
    span2_data: `${year}.${month}.${day}`,
    span3_data: "사망했습니다.",
    span4_data: "탭하여 다음 페이지로 넘어가기",
  };
  const styleName = {
    tp_style: ["fade-in-2s"],
    h3_style: ["heavy", "neon-green"],
    span1_style: ["noto", "s", "medium", "neon-green"],
    span2_style: ["nanum", "l", "bold", "neon-green"],
    span3_style: ["noto", "s", "medium", "neon-green"],
    span4_style: ["noto", "xs", "light", "neon-green", "fade-in-out-2s"],
  };

  return (
    <Link to={"/p26"} onClick={onClick}>
      <div className={classNames("Page", "P25", "bg-video", "fade-in")}>
        <video autoPlay muted>
          <source src={P25_Video} type="video/mp4" />
        </video>
        <button className={classNames("back", "back-white")} onClick={goBack}></button>
        <SeparatedTemplate25 data={data} styleName={styleName}></SeparatedTemplate25>
      </div>
    </Link>
  );
}

export default P25;
