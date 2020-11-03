import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import useInputs from "../useInputs";
import FullTextFieldTemplate from "../Templates/FullTextFieldTemplate";

import "../../scss/pages.scss";

function P12_2({ history }) {
  const click = useRef(false);
  const [input, onChange] = useInputs({
    homeHappyMoment: localStorage.getItem("homeHappyMoment") ?? "",
    isValidate: localStorage.getItem("homeHappyMoment")? true : false,
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
        question: (
          <>
            집으로 돌아와 짐 정리를 하던 중 당신의 사진이 담긴 앨범을 발견했습니다.
            <br />
            살아온 날들을 되돌아보며 가장 행복했던 순간을 떠올립니다. 그 순간은 언제인가요?
          </>
        ),
      },
    },
    ftfr_data: {
      to: "/p13",
      prevent_click: click,
      validate: input.isValidate,
      ftf_data: {
        tf_data: {
          input: input.homeHappyMoment,
          name: "homeHappyMoment",
          onChange: onChange,
        },
      },
    },
  };
  const styleName = {
    tp_style: ["center", "fade-in-2s"],
    dq_style: {
      h3_style: ["normal", "white"],
      p_style: ["white", "two-line"],
    },
    ftfr_style: {
      ftf_style: {
        ftf_style: ["khaki-brown", "weak", "round"],
        tf_style: ["xxl", "normal", "moment"],
      },
      button_style: ["xs", "dark-brown"],
    },
  };

  return (
    <div className={classNames("Page", "P12-2", "fade-in")}>
      <button className={classNames("back", "back-white")} onClick={goBack}></button>
      <FullTextFieldTemplate data={data} styleName={styleName}></FullTextFieldTemplate>
    </div>
  );
}

export default P12_2;
