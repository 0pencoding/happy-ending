import React, { useState } from "react";
import classNames from "classnames";
import useInputs from "../useInputs";
import MultiTextFieldTemplate from "../Templates/MultiTextFieldTemplate";
import P8_1_2_Video from "../../assets/videos/8-1-1-travel.mp4";
import P8_1_2_Video_tran from "../../assets/videos/8-1-1-travel_tran.mp4";

import "../../scss/pages.scss";

function P8_1_2({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const [video, setVideo] = useState(P8_1_2_Video);

  const onClick = () => {
    setVideo(P8_1_2_Video_tran);
  };

  const goNext = () => {
    if (video !== P8_1_2_Video) {
      history.push("/p9_1");
    }
  };

  const [inputs, onChange] = useInputs({
    travelWith: localStorage.getItem("travelWith") ?? "",
    travelTo: localStorage.getItem("travelTo") ?? "",
  });

  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: "여행을 함께 떠나고 싶으시군요. 누구와 함께 어디로 떠나시겠습니까?",
      },
    },
    mtfr_data: {
      to: false,
      onClick: onClick,
      mtfs_data: {
        l_text: "3일간의 여행을 (",
        ph1: "누구",
        m_text: ")와/과 함께 (",
        ph2: "어디",
        r_text: ")(으)로 떠난다.",
        tf1_data: {
          input1: inputs.travelWith,
          name1: "travelWith",
          onChange1: onChange,
        },
        tf2_data: {
          input2: inputs.travelTo,
          name2: "travelTo",
          onChange2: onChange,
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
    mtfr_style: {
      mtfs_style: {
        bg_style: ["l", "weak", "dark-greenish-blue"],
        text_style: ["noto", "s", "normal", "white"],
        tf_style: ["s", "travel"],
      },
      btn_style: ["xs", "greenish-blue"],
    },
  };

  return (
    <div className={classNames("Page", "P8-1-2", "bg-video", "fade-in")}>
      {video === P8_1_2_Video && (
        <video autoPlay muted loop key={video}>
          <source src={video} type="video/mp4" />
        </video>
      )}
      {video !== P8_1_2_Video && (
        <video autoPlay muted key={video} onEnded={goNext}>
          <source src={video} type="video/mp4" />
        </video>
      )}

      <button className={classNames("back", "back-white")} onClick={goBack}></button>
      <MultiTextFieldTemplate data={data} styleName={styleName}></MultiTextFieldTemplate>
    </div>
  );
}

export default P8_1_2;
