import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import useInputs from "../reducerInputs";
import SeparatedTemplate14 from "../Templates/SeparatedTemplate14";
import delIcon from "../../assets/icons/will-del.svg";

import "../../scss/pages.scss";

function P14({ history }) {
  const click = useRef(false);
  const [ state, onCreate, onChange, onRemove ] = useInputs({
    messages: JSON.parse(localStorage.getItem("messages")) ?? [{ id: 1 }],
    isValidate: JSON.parse(localStorage.getItem("messages")) ? true : false,
  });

  useEffect(() => {
    setTimeout(() => click.current = true, 3000);
  }, []);

  const goBack = () => {
    history.goBack();
  };
  
  const data = {
    prevent_click: click,
    validate: state.isValidate,
    dq_data: {
      h3_data: {
        day: 4,
      },
      p_data: {
        question: (
          <>
            당신은 유서를 작성하기 위해 책상에 앉았습니다.
            <br />
            앞에 있는 노트에 마지막 말을 남겨주세요.
          </>
        ),
      },
    },
    ib_data: {
      state: state,
      onCreate: onCreate,
      item_data: {
        tf_data: {
          placeHolder: "누구",
        },
        span_data: {
          text: "에게",
        },
        ta_data: {
          placeHolder: "그동안 하지 못했던 말들을 적어보세요.(300자 제한)",
        },
        names: ["to", "message"],
        onChange: onChange,
        onRemove: onRemove,
        icon_data: {
          icon_img: delIcon,
          icon_alt: "delete_icon",
        }
      }
    }
  };

  const styleName = {
    tp_style: ["fade-in-2s"],
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
    ib_style: {
      item_style: {
        tf_style: ["s", "message", "item"],
        span_style: ["s", "eclipse", "center"],
        icon_style: ["delete"],
        ta_style: ["item"],
      },
    },
    button_style: ["noto", "xs", "blue", "light"],
  };
  return (
    <div className={classNames("Page", "P14", "fade-in")}>
      <button className={classNames("back", "back-white")} onClick={goBack}></button>
      <SeparatedTemplate14 data={data} styleName={styleName}></SeparatedTemplate14>
    </div>
  );
}

export default P14;
