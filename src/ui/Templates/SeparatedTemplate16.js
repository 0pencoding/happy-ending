import React from "react";
import classNames from "classnames";
import Button from "../Atoms/Button";
import { Link } from "react-router-dom";
import Dquestion from "../Organisms/Dquestion";

import "../../scss/Templates/SeparatedTemplate16.scss";

function SeparatedTemplate16({ data, styleName }) {
  const { onClick, dq_data } = data;
  const { tp_style, dq_style, btn_style } = styleName;

  return (
    <div className={classNames("SeparatedTemplate16", tp_style)}>
      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
      <Link to={"/p16_1"} onClick={onClick}>
        <Button styleName={btn_style}>사진촬영</Button>
      </Link>
    </div>
  );
}

export default SeparatedTemplate16;
