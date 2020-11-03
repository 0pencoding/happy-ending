import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import InsertyPaperTemplate from "../Templates/InsertyPaperTemplate";
import P11Video from "../../assets/videos/11-after home.mp4";

import "../../scss/pages.scss";

function P11({ history }) {
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
        day: 4,
      },
      p_data: {
        question: (
          <>
            집에서 편안한 휴식을 취한 당신.
            <br />
            평화로운 일상에서 당신은 소소한 행복을 누렸습니다.
            <br />
            <br />
            이제 4일의 시간이 남았네요.
            <br />
            남은 시간동안 당신의 주변을 돌아보며 정리하는 시간을 가지세요.
            <br />
          </>
        ),
      },
    },
  };
  const styleName = {
    tp_style: ["left", "P11", "fade-in-2s"],
    dq_style: {
      h3_style: ["normal", "white"],
      p_style: ["white", "line-4"],
    },
    span_style: ["noto", "xs", "white", "light", "fade-in-out-2s"],
  };

  return (
    <Link to="/p12_1" onClick={onClick}>
      <div className={classNames("Page", "P11", "bg-video", "fade-in")}>
        <video autoPlay muted>
          <source src={P11Video} type="video/mp4" />
        </video>
        <button className={classNames("back", "back-white")} onClick={goBack}></button>
        <InsertyPaperTemplate data={data} styleName={styleName}></InsertyPaperTemplate>
      </div>
    </Link>
  );
}

export default P11;
