import classNames from "classnames";
import Button from "../Atoms/Button";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import GraveStone from "../Molecules/GraveStone";

import "../../scss/validate.scss";
import "../../scss/Organisms/GraveStoneResponse.scss";

function GraveStoneResponse({ data, styleName }) {
  const { prevent_click, validate, gs_data, btn_data } = data;
  const { gs_style, btn_style } = styleName;
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
    <div className={"GraveStoneResponse"}>
      <div className={classNames("check-validate")} ref={v_component}>
        <GraveStone data={gs_data} styleName={gs_style}></GraveStone>
      </div>
      <Link to={"/p25"}>
        <Button styleName={btn_style} onClick={onClick}>{btn_data.text}</Button>
      </Link>
    </div>
  );
}

export default GraveStoneResponse;
