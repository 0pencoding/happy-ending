import classNames from "classnames";
import Button from "../Atoms/Button";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ItemBox from "../Organisms/ItemBox";
import Dquestion from "../Organisms/Dquestion";

import "../../scss/validate.scss";
import "../../scss/Templates/SeparatedTemplate14.scss";

function SeparatedTemplate14({ data, styleName }) {
  const { prevent_click, validate, dq_data, ib_data } = data;
  const { tp_style, dq_style, ib_style, button_style } = styleName;
  const v_component = useRef(null);

  const onClick = (e) => {
    if (!prevent_click.current)
      e.preventDefault();
    else {
      if (!validate) {
        v_component.current.classList.add("validate");
        e.preventDefault();
      } else {
        v_component.current.classList.remove("validate");
      }
    }
  }

  return (
    <div className={classNames("SeparatedTemplate14", "clearfix", tp_style)}>
      <div className={classNames("DquestionContainer", "float--left")}>
        <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
      </div>
      <div className={classNames("ItemBoxContainer", "float--right")}>
        <div className={classNames("check-validate")} ref={v_component}>
          <ItemBox data={ib_data} styleName={ib_style}></ItemBox>
        </div>
        <Link to={"/p15"}>
          <Button styleName={button_style} onClick={onClick}>확인</Button>
        </Link>
      </div>
    </div>
  );
}

export default SeparatedTemplate14;
