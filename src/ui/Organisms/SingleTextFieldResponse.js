import classNames from "classnames";
import Button from "../Atoms/Button";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import SingleTextFieldSentence from "../Molecules/SingleTextFieldSentence";

import "../../scss/validate.scss";

function SingleTextFieldResponse({ data, styleName }) {
  const { to, prevent_click, validate, setVideo, stfs_data } = data;
  const { stfs_style, btn_style } = styleName;
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
    <div className={"SingleTextFieldResponse"}>
      <div className={classNames("check-validate")} ref={v_component}>
        <SingleTextFieldSentence data={stfs_data} styleName={stfs_style}></SingleTextFieldSentence>
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

export default SingleTextFieldResponse;
