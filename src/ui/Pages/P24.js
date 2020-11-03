import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import useInputs from "../useInputs";
import SeparatedTemplate24 from "../Templates/SeparatedTemplate24";

import "../../scss/pages.scss";

function P24({ history }) {
  const click = useRef(false);
  const name = localStorage.getItem("name") ?? "홍길동";
  const [inputs, onChange] = useInputs({	
    alias: localStorage.getItem("alias") ?? "",	
    lastWord: localStorage.getItem("lastWord") ?? "",	
    isValidate: localStorage.getItem("alias")&&localStorage.getItem("lastWord")? true : false,
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
        day: 1,
      },
      p_data: {
        question: (
          <>
            앞으로 당신이 잠들 묘비에
            <br />
            남기고 싶은 한마디를 적어주세요.
          </>
        ),
      },
    },
    gsr_data: {
      prevent_click: click,
      validate: inputs.isValidate,
      gs_data: {
        tf_data: "(              어떤              )",
        sp1_data: "사람,",
        sp2_data: {
          name: name,
        },
        inputs: inputs,	
        names: ["alias", "lastWord"],	
        onChange: onChange,
      },
      btn_data: {
        text: "확인",
      },
    },
  };
  const styleName = {
    tp_style: ["fade-in-2s"],
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
    gsr_style: {
      gs_style: {
        tf_style: ["nanum", "xl", "extra-bold", "grave-stone"],
        sp1_style: ["nanum", "s", "extra-bold", "eclipse"],
        sp2_style: ["nanum", "s", "extra-bold", "eclipse"],
        ta_style: ["grave"],
      },
      btn_style: ["xs", "light-gray"],
    },
  };

  return (
    <div className={classNames("Page", "P24", "fade-in")}>
      <button className={classNames("back", "back-white")} onClick={goBack}></button>
      <SeparatedTemplate24 data={data} styleName={styleName}></SeparatedTemplate24>
    </div>
  );
}

export default P24;
