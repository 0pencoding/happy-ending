import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import SeparatedTemplate7 from "../Templates/SeparatedTemplate7";
import P7Video from "../../assets/videos/7-break or not.mp4";
import P7Video_break from "../../assets/videos/7-break.mp4";

import "../../scss/pages.scss";

function P7({ history }) {
  const click = useRef(false);
  const [video, setVideo] = useState(P7Video);

  useEffect(() => {
    setTimeout(() => click.current = true, 3000);
  }, []);
  
  const goBack = () => {
    history.goBack();
  };

  const goNext = () => {
    history.push("/p7_1");
  };

  const onClickA = (e) => {
    e.preventDefault();
    if (click.current)
      setVideo(P7Video_break);
  };

  const onClickB = (e) => {
    if (!click.current)
      e.preventDefault();
  };

  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: (
          <>
            주변을 둘러보니 10살때부터 돈을 모았던 돼지저금통이 보입니다.
            <br />
            돼지저금통을 깰까요? 아니면 그대로 둘까요?
          </>
        ),
      },
    },
    s1_data: {
      to: "/p7_1",
      onClick: onClickA,
      text: "깨고싶으면 망치를 탭해주세요",
    },
    s2_data: {
      to: "/p7_2",
      text: "그대로 두려면 돼지저금통을 탭해주세요",
      onClick: onClickB,
    },
  };
  const styleName = {
    tp_style: ["fade-in-2s"],
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
    s1_style: ["noto", "xs", "davy-gray", "normal"],
    s2_style: ["noto", "xs", "davy-gray", "normal"],
  };
  return (
    <div className={classNames("Page", "P7", "bg-video", "fade-in")}>
      {video === P7Video && (
        <video autoPlay muted loop key={video}>
          <source src={video} type="video/mp4" />
        </video>
      )}
      {video !== P7Video && (
        <video autoPlay muted key={video} onEnded={goNext}>
          <source src={video} type="video/mp4" />
        </video>
      )}
      <button className={classNames("back", "back-gray")} onClick={goBack}></button>
      <SeparatedTemplate7 data={data} styleName={styleName}></SeparatedTemplate7>
    </div>
  );
}

export default P7;
