import classNames from "classnames";
import Button from "../Atoms/Button";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import FullTextField from "../Molecules/FullTextField";

import "../../scss/validate.scss";

function FullTextFieldResponse({ data, styleName }) {
  const { ftf_style, button_style } = styleName;
  const { to, prevent_click, validate, ftf_data } = data;
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
    <>
      <div className={classNames("check-validate")} ref={v_component}>
        <FullTextField data={ftf_data} styleName={ftf_style}></FullTextField>
      </div>
      <Link to={to}>
        <Button styleName={button_style} onClick={onClick}>확인</Button>
      </Link>
    </>
  );
}

export default FullTextFieldResponse;
