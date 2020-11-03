import React, { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import useInputs from "../useInputs";
import SingleTextFieldTemplate from "../Templates/SingleTextFieldTemplate";
import P8_1_1_Video from "../../assets/videos/8-1-1-travel.mp4";
import P8_1_1_Video_tran from "../../assets/videos/8-1-1-travel_tran.mp4";

import "../../scss/pages.scss";

function P8_1_1({ history }) {
  const click = useRef(false);
  const loopVideo = useRef(null);
  const [video, setVideo] = useState(P8_1_1_Video);
  const [input, onChange] = useInputs({	
    travelToAlone: localStorage.getItem("travelToAlone") ?? "",	
    isValidate: localStorage.getItem("travelToAlone")? true : false,
  });

  useEffect(() => {
    setTimeout(() => click.current = true, 3000);
  }, []);

  const goBack = () => {
    history.goBack();
  };

  const goNext = () => {
    if (video !== P8_1_1_Video) {
      history.push("/p9_1");
    }
  };

  const onEnded = () => {
    loopVideo.current.currentTime = 2;
    loopVideo.current.play();
  }

  const onClick = () => {
    if (click.current)
      setVideo(P8_1_1_Video_tran);
  };
  
  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: "여행을 혼자 떠나시는군요. 어디로 떠나시겠습니까?",
      },
    },
    stfr_data: {
      to: false,
      setVideo: onClick,
      prevent_click: click,
      validate: input.isValidate,
      stfs_data: {
        l_text: "3일간의 여행을 혼자 (",
        placeHolder: "어디",
        r_text: ")(으)로 떠난다.",
        tf_data: {
          input: input.travelToAlone,
          name: "travelToAlone",
          onChange: onChange,
        },
      },
    },
  };
  const styleName = {
    tp_style: ["fade-in-2s"],
    dq_style: {
      h3_style: ["normal", "white"],
      p_style: ["white"],
    },
    stfr_style: {
      stfs_style: {
        bg_style: ["s", "weak", "dark-greenish-blue"],
        text_style: ["noto", "s", "normal", "white"],
        tf_style: ["s", "travel"],
      },
      btn_style: ["xs", "greenish-blue"],
    },
  };

  return (
    <div className={classNames("Page", "P8-1-1", "bg-video", "fade-in")}>
      {video === P8_1_1_Video && (
        <video autoPlay muted key={video} onEnded={onEnded} ref={loopVideo}>
          <source src={video} type="video/mp4" />
        </video>
      )}
      {video !== P8_1_1_Video && (
        <video autoPlay muted key={video} onEnded={goNext}>
          <source src={video} type="video/mp4" />
        </video>
      )}

      <button className={classNames("back", "back-white")} onClick={goBack}></button>
      <SingleTextFieldTemplate data={data} styleName={styleName}></SingleTextFieldTemplate>
    </div>
  );
}

export default P8_1_1;
