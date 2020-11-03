import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import useInputs from "../useInputs";
import FullTextFieldTemplate from "../Templates/FullTextFieldTemplate";

import "../../scss/pages.scss";

function P21({ history }) {
  const click = useRef(false);
  const [input, onChange] = useInputs({
    sadMan: localStorage.getItem("sadMan") ?? "",
    isValidate: localStorage.getItem("sadMan")? true : false,
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
        day: 2,
      },
      p_data: {
        question: (
          <>
            장례식장에 올 사람들 중, 당신의 죽음에 가장 슬피 울어줄 것 같은 사람이 누구인지 생각해봅니다.
            <br />그 사람은 누구인가요?
          </>
        ),
      },
    },
    ftfr_data: {
      to: "/p22",
      prevent_click: click,
      validate: input.isValidate,
      ftf_data: {
        tf_data: {
          input: input.sadMan,
          name: "sadMan",
          onChange: onChange,
        },
      },
    },
  };
  const styleName = {
    tp_style: ["center", "fade-in-2s"],
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse", "two-line"],
    },
    ftfr_style: {
      ftf_style: {
        ftf_style: ["white", "weak", "round"],
        tf_style: ["xxl", "normal", "sad-man"],
      },
      button_style: ["xs", "white", "translucent"],
    },
  };

  return (
    <div className={classNames("Page", "P21", "fade-in")}>
      <button className={classNames("back", "back-gray")} onClick={goBack}></button>
      <FullTextFieldTemplate data={data} styleName={styleName}></FullTextFieldTemplate>
    </div>
  );
}

export default P21;
