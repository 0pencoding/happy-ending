import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import InsertyPaperTemplate from "../Templates/InsertyPaperTemplate";
import P23Vedio from "../../assets/videos/23-after D-1.mp4";

import "../../scss/pages.scss";

function P23({ history }) {
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
    history.goBack();
  };

  const data = {
    dq_data: {
      h3_data: {
        day: 1,
      },
      p_data: {
        question: (
          <>
            죽기 전 마지막 날입니다.
            <br />집 앞 공원 벤치에 앉아 풍경을 바라보고 있습니다.
            <br />
            세상의 마지막 풍경을 눈에 담으며 당신의 삶의 흔적을 남겨봅니다.
            <br />
          </>
        ),
      },
    },
  };
  const styleName = {
    tp_style: ["center", "P23", "fade-in-2s"],
    dq_style: {
      h3_style: ["normal", "white"],
      p_style: ["white", "line-3"],
    },
    span_style: ["noto", "xs", "davy-gray", "light", "fade-in-out-2s"],
  };

  return (
    <Link to={"/p24"} onClick={onClick}>
      <div className={classNames("Page", "P23", "bg-video", "fade-in")}>
        <video autoPlay muted>
          <source src={P23Vedio} type="video/mp4" />
        </video>
        <button className={classNames("back", "back-white")} onClick={goBack}></button>
        <InsertyPaperTemplate data={data} styleName={styleName}></InsertyPaperTemplate>
      </div>
    </Link>
  );
}

export default P23;
