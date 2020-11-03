import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import useInputs from "../useInputs";
import FullTextFieldTemplate from "../Templates/FullTextFieldTemplate";
import P19Vedio from "../../assets/videos/19-music.mp4";

import "../../scss/pages.scss";

function P19({ history }) {
  const click = useRef(false);
  const loopVideo = useRef(null);
  const [input, onChange] = useInputs({
    song: localStorage.getItem("song") ?? "",
    isValidate: localStorage.getItem("song")? true : false,
  });

  useEffect(() => {
    setTimeout(() => click.current = true, 3000);
  }, []);

  const goBack = () => {
    history.goBack();
    history.goBack();
  };

  const onEnded = () => {
    loopVideo.current.currentTime = 2;
    loopVideo.current.play();
  }

  const data = {
    dq_data: {
      h3_data: {
        day: 2,
      },
      p_data: {
        question: "당신의 장례식장에 올 사람들에게 들려주고 싶은 노래 한 곡을 골라주세요.",
      },
    },
    ftfr_data: {
      to: "/p20",
      prevent_click: click,
      validate: input.isValidate,
      ftf_data: {
        tf_data: {
          input: input.song,
          name: "song",
          onChange: onChange,
        },
      },
    },
  };
  const styleName = {
    tp_style: ["center"],
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse", "one-line"],
    },
    ftfr_style: {
      ftf_style: {
        ftf_style: ["gray", "strong", "round"],
        tf_style: ["xxl", "normal", "music"],
      },
      button_style: ["xs", "orange", "music"],
    },
  };

  return (
    <div className={classNames("Page", "P19", "bg-video", "fade-in")}>
      <video autoPlay muted onEnded={onEnded} ref={loopVideo}>
        <source src={P19Vedio} type="video/mp4" />
      </video>
      <button className={classNames("back", "back-gray")} onClick={goBack}></button>
      <FullTextFieldTemplate data={data} styleName={styleName}></FullTextFieldTemplate>
    </div>
  );
}

export default P19;
