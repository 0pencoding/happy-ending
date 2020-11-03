import classNames from "classnames";
import Button from "../Atoms/Button";
import Info from "../Molecules/Info";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "../../scss/validate.scss";

function InfoResponse({data}) {
  const { validate, prevent_click, info_data } = data;
  const v_component = useRef(null);

  const onClick = (e) => {
    if (!validate) {
      v_component.current.classList.add("validate");
      e.preventDefault();
    } else {
      v_component.current.classList.remove("validate");
    }
  }

  return (
    <>
      <div className={classNames("check-validate")} ref={v_component}>
        <Info data={info_data}></Info>
      </div>
      <Link to={"/p5"} onClick={prevent_click}>
        <Button styleName={["xxs", "white"]} onClick={onClick}>확인</Button>
      </Link>
    </>
  );
}

export default InfoResponse;
