import React, { useRef, useEffect } from "react";
import classNames from "classnames";
import MultipleChoiceTemplate from "../Templates/MultipleChoiceTemplate";
import P8_1_Video from "../../assets/videos/8-1-travel alone_together.mp4";

import "../../scss/pages.scss";

function P8_1({ history }) {
  const click = useRef(false);

  useEffect(() => {
    setTimeout(() => click.current = true, 5000);
  }, []);

  const goBack = () => {
    history.goBack();
  };
  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: "여행을 혼자 떠나시겠습니까? 함께 떠나시겠습니까?",
      },
    },
    sr_data: {
      prevent_click: click,
      buttons: [
        {
          to: "/p8_1_1",
          text: "A. 3일간의 여행을 혼자 떠난다",
          onClick: () => {
            localStorage.setItem("choice_p8", "travel_alone");
          },
        },
        {
          to: "/p8_1_2",
          text: "B. 3일간의 여행을 함께 떠난다",
          onClick: () => {
            localStorage.setItem("choice_p8", "travel_together");
          },
        },
      ],
    },
  };

  const styleName = {
    tp_style: ["center", "two-btn", "fade-in-4s"],
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
    sr_style: {
      btn_style: ["m", "white"],
    },
  };

  return (
    <div className={classNames("Page", "P8_1", "bg-video", "fade-in")}>
      <video autoPlay muted>
        <source src={P8_1_Video} type="video/mp4" />
      </video>
      <button className={classNames("back", "back-gray")} onClick={goBack}></button>
      <MultipleChoiceTemplate data={data} styleName={styleName}></MultipleChoiceTemplate>
    </div>
  );
}

export default P8_1;
