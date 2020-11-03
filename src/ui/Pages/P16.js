import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import SeparatedTemplate16 from "../Templates/SeparatedTemplate16";

import "../../scss/pages.scss";

function P16({ history }) {
  const click = useRef(false);

  useEffect(() => {
    setTimeout(() => click.current = true, 3000);
  }, []);

  const onClick = (e) => {
    if (!click.current)
      e.preventDefault();
  };

  const goBack = () => {
    history.goBack();
    history.goBack();
  };

  const data = {
    onClick: onClick,
    dq_data: {
      h3_data: {
        day: 3,
      },
      p_data: {
        question: (
          <>
            오늘은 영정사진을 찍기로 한 날입니다.
            <br />
            당신이 가장 좋아하는 옷을 입고 동네 사진관에 도착했습니다.
            <br />
            당신의 가장 아름다운 순간을 사진으로 남기세요.
          </>
        ),
      },
    },
  };
  const styleName = {
    tp_style: ["fade-in-2s"],
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
    btn_style: ["xs", "wood"],
  };

  return (
    <div className={classNames("Page", "P16", "fade-in")}>
      <button className={classNames("back", "back-white")} onClick={goBack}></button>
      <SeparatedTemplate16 data={data} styleName={styleName}></SeparatedTemplate16>
    </div>
  );
}

export default P16;
