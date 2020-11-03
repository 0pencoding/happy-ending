import classNames from "classnames";
import Button from "../Atoms/Button";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import MultiTextFieldSentence from "../Molecules/MultiTextFieldSentence";

import "../../scss/validate.scss";

function MultiTextFieldResponse({ data, styleName }) {
  const { to, prevent_click, validate, setVideo, mtfs_data } = data;
  const { mtfs_style, btn_style } = styleName;
  const v_component = useRef(null);

  const onClick = (e) => {
    if (!prevent_click.current)
      e.preventDefault();
    else {
      if (!validate) {
        v_component.current.classList.add("validate");
        e.preventDefault();
        e.stopPropagation();
      } else {
        v_component.current.classList.remove("validate");
        if (!to) {
          e.preventDefault();
          e.stopPropagation();
          setVideo();
        }
      }
    }
  }

  return (
    <div className={"MultiTextFieldResponse"}>
      <div className={classNames("check-validate")} ref={v_component}>
        <MultiTextFieldSentence data={mtfs_data} styleName={mtfs_style}></MultiTextFieldSentence>
      </div>
      <Link to={to? to : ""}>
        <Button styleName={btn_style} onClick={onClick}>확인</Button>
      </Link>
      {/* {to && (
        <Link to={to}>
          <Button styleName={btn_style}>확인</Button>
        </Link>
      )}
      {!to && (
        <Button styleName={btn_style} onClick={onClick}>
          확인
        </Button>
      )} */}
    </div>
  );
}

export default MultiTextFieldResponse;
