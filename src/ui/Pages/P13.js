import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import useInputs from "../useInputs";
import FullTextFieldTemplate from "../Templates/FullTextFieldTemplate";
import P13Vedio from "../../assets/videos/13-erase.mp4";

import "../../scss/pages.scss";

function P13({ history }) {
  const click = useRef(false);
  const [input, onChange] = useInputs({
    eraseMoment: localStorage.getItem("eraseMoment") ?? "",
    isValidate: localStorage.getItem("eraseMoment")? true : false,
  });

  useEffect(() => {
    setTimeout(() => click.current = true, 3000);
  }, []);

  const goBack = () => {
    history.goBack();
  };

  const data = {
    dq_data: {
      h3_data: {
        day: 4,
      },
      p_data: {
        question: "반대로, 당신의 삶에서 지우고 싶은 순간은 언제인가요?",
      },
    },
    ftfr_data: {
      to: "/p14",
      prevent_click: click,
      validate: input.isValidate,
      ftf_data: {
        tf_data: {
          input: input.eraseMoment,
          name: "eraseMoment",
          onChange: onChange,
        },
      },
    },
  };
  const styleName = {
    tp_style: ["center", "fade-in-2s"],
    dq_style: {
      h3_style: ["normal", "white"],
      p_style: ["white", "one-line"],
    },
    ftfr_style: {
      ftf_style: {
        ftf_style: ["charcoal-black", "weak", "round"],
        tf_style: ["xxl", "normal", "moment"],
      },
      button_style: ["xs", "grayish-navy"],
    },
  };

  return (
    <div className={classNames("Page", "P13", "bg-video", "fade-in")}>
      <video autoPlay muted>
        <source src={P13Vedio} type="video/mp4" />
      </video>
      <button className={classNames("back", "back-white")} onClick={goBack}></button>
      <FullTextFieldTemplate data={data} styleName={styleName}></FullTextFieldTemplate>
    </div>
  );
}

export default P13;
