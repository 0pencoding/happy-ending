import React from "react";
import Span from "../Atoms/Span";
import Dquestion from "../Organisms/Dquestion";
import classNames from "classnames";

// import "../../scss/Templates/SeparatedTemplate7.scss";

function SeparatedTemplate7({ data, styleName }) {
  const { dq_data, s1_data, s2_data } = data;
  const { template_style, dq_style, s1_style, s2_style } = styleName;
  return (
    <div className={classNames("SeparatedTemplate7", template_style)}>
      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
      <Span styleName={s1_style}>{s1_data.text}</Span>
      <Span styleName={s2_style}>{s2_data.text}</Span>
    </div>
  );
}

export default SeparatedTemplate7;
