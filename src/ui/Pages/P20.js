import React, { useRef, useEffect } from "react";
import classNames from "classnames";
import MultipleChoiceTemplate from "../Templates/MultipleChoiceTemplate";

import "../../scss/pages.scss";

function P20({ history }) {
  const click = useRef(false);

  useEffect(() => {
    setTimeout(() => click.current = true, 3000);
  }, []);

  const goBack = () => {
    history.goBack();
  };

  const data = {
    dq_data: {
      h3_data: {
        day: 2,
      },
      p_data: {
        question: (
          <>
            당신은 어제 고른 꽃을 바라보며, 이틀 후에 있을 장례식의 모습을 상상해봅니다.
            <br />
            장례식의 분위기는 어떨까요?
          </>
        ),
      },
    },
    sr_data: {
      prevent_click: click,
      buttons: [
        {
          to: "/p21",
          text: "사람들이 함께 나를 기억하고 추억하고 있다",
        },
        {
          to: "/p21",
          text: "나의 죽음에 눈물을 흘리며 슬퍼하고 있다",
        },
        {
          to: "/p21",
          text: "서로 위로하며 슬픔을 달래고 있다",
        },
        {
          to: "/p21",
          text: "덤덤하게 나의 죽음을 받아들이고 있다",
        },
      ],
    },
  };

  const styleName = {
    tp_style: ["center", "four-btn", "fade-in-2s"],
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
    sr_style: {
      btn_style: ["xxl", "white"],
    },
  };

  return (
    <div className={classNames("Page", "P20", "fade-in")}>
      <button className={classNames("back", "back-gray")} onClick={goBack}></button>
      <MultipleChoiceTemplate data={data} styleName={styleName}></MultipleChoiceTemplate>
    </div>
  );
}

export default P20;
