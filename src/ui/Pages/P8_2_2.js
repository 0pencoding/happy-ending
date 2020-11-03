import React, { useRef, useEffect } from "react";
import classNames from "classnames";
import useInputs from "../useInputs";
import MultiTextFieldTemplate from "../Templates/MultiTextFieldTemplate";

import "../../scss/pages.scss";

function P8_2_2({ history }) {
  const click = useRef(false);
  const [inputs, onChange] = useInputs({	
    homeWithWho: localStorage.getItem("homeWithWho") ?? "",	
    homeWithDo: localStorage.getItem("homeWithDo") ?? "",	
    isValidate: localStorage.getItem("homeWithWho")&&localStorage.getItem("homeWithDo")? true : false,
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
        day: 7,
      },
      p_data: {
        question: "집에서 함께 시간을 보내기로 하셨군요. 무엇을 하면서 보내시겠습니까?",
      },
    },
    mtfr_data: {
      to: "/p9_2",
      prevent_click: click,
      validate: inputs.isValidate,
      mtfs_data: {
        l_text: "집에서 (",
        ph1: "누구",
        m_text: ")와/과 함께 (",
        ph2: "무엇을 한",
        r_text: ")다.",
        tf1_data: {	
          input1: inputs.homeWithWho,	
          name1: "homeWithWho",	
          onChange1: onChange,	
        },	
        tf2_data: {	
          input2: inputs.homeWithDo,	
          name2: "homeWithDo",	
          onChange2: onChange,	
        },
      },
    },
  };
  const styleName = {
    tp_style: ["fade-in-2s"],
    dq_style: {
      h3_style: ["normal", "eclipse", "close"],
      p_style: ["eclipse", "close"],
    },
    mtfr_style: {
      mtfs_style: {
        bg_style: ["m", "strong", "charcoal-gray"],
        text_style: ["noto", "s", "normal", "eclipse"],
        tf_style: ["s", "house"],
      },
      btn_style: ["xs", "white", "close"],
    },
  };

  return (
    <div className={classNames("Page", "P8-2-2", "fade-in")}>
      <button className={classNames("back", "back-gray")} onClick={goBack}></button>
      <MultiTextFieldTemplate data={data} styleName={styleName}></MultiTextFieldTemplate>
    </div>
  );
}

export default P8_2_2;
