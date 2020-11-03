import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import MultipleChoiceTemplate from "../Templates/MultipleChoiceTemplate";
import P6_Video from "../../assets/videos/6-tell or not.mp4";
import P6_Video_A from "../../assets/videos/6-tell or not-tran a.mp4";
import P6_Video_B from "../../assets/videos/6-tell or not-tran b.mp4";

import "../../scss/pages.scss";

function P6({ history }) {
  const click = useRef(false);
  const [video, setVideo] = useState(P6_Video);
  
  useEffect(() => {
    setTimeout(() => click.current = true, 3000);
  }, []);

  const goBack = () => {
    history.goBack();
  };

  const onClickA = () => {
    if (click.current)
      setVideo(P6_Video_A);
  };

  const onClickB = () => {
    if (click.current)
      setVideo(P6_Video_B);
  };

  const goNext = () => {
    if (video !== P6_Video) {
      history.push("/p7");
    }
  };

  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: (
          <>
            사망일을 알게 된 당신, 집 안에 덩그러니 앉아있습니다.
            <br />
            침대 머리맡에 놓여있는 핸드폰을 바라보며 주변인들에게 이 사실을 알릴지 고민합니다.
          </>
        ),
      },
    },
    sr_data: {
      prevent_click: click,
      buttons: [
        {
          text: "A. 가족, 친구에게 이 사실을 말한다",
          to: "/p7",
          onClick: onClickA,
        },
        {
          text: "B. 말하지 않는다",
          to: "/p7",
          onClick: onClickB,
        },
      ],
    },
  };

  const styleName = {
    tp_style: ["left", "two-btn", "fade-in-2s"],
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
    sr_style: {
      btn_style: ["xl", "white", "wait-until-video-end"],
    },
  };

  return (
    <div className={classNames("Page", "P6", "bg-video", "fade-in")}>
      <video autoPlay muted key={video} onEnded={goNext}>
        <source src={video} type="video/mp4" />
      </video>
      <button className={classNames("back", "back-gray")} onClick={goBack}></button>
      <MultipleChoiceTemplate data={data} styleName={styleName}></MultipleChoiceTemplate>
    </div>
  );
}

export default P6;
