import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import SeparatedTemplate2 from "../Templates/SeparatedTemplate2";

import "../../scss/pages.scss";

function P2() {
  const click = useRef(false);

  useEffect(() => {
    setTimeout(() => click.current = true, 4000);
  }, []);

  const onClick = (e) => {
    if (!click.current)
      e.preventDefault();
  };

  const data = {
    p_data: {
      text: (
        <>
          죽음은 누구에게나 찾아옴에도 불구하고 사람들은 이를 외면한 채 살아갑니다.
          <br />
          <br />
          하지만 삶과 죽음은 인생의 연장선에서 공존하기 때문에
          <br />
          죽음을 삶의 일부로 받아들이는 것은 보다 좋은 삶을 살기 위해 필요한 과정입니다.
          <br />
          <br />
          HAPPY ENDING은 삶의 마무리 과정을 경험함으로써 이전의 삶을 되돌아보고,
          <br />
          앞으로의 시간을 더욱 의미있게 살아가는데 도움을 주도록 제작된 스토리텔링 게임입니다.
          <br />
          <br />
          이제 게임을 시작합니다.
        </>
      ),
    },
    span_data: {
      text: "탭하여 다음 페이지로 넘어가기",
    },
  };
  const styleName = {
    p_style: ["white", "fade-in-2s"],
    span_style: ["noto", "xs", "white", "light", "fade-in-out-3s"],
  };
  return (
    <Link to={"/p3"} onClick={onClick}>
      <div className={classNames("Page", "P2", "fade-in")}>
        <SeparatedTemplate2 data={data} styleName={styleName}></SeparatedTemplate2>
      </div>
    </Link>
  );
}

export default P2;
