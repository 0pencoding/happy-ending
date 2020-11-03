import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import SeparatedTemplate16_1 from "../Templates/SeparatedTemplate16_1";

import "../../scss/pages.scss";

function P16_1({ history }) {
  const click = useRef(false);

  useEffect(() => {
    setTimeout(() => click.current = true, 3000);
  }, []);

  const goBack = () => {
    history.goBack();
  };

  const data = {
    prevent_click: click,
    p_data: {
      text: (
        <>
          정면에 있는 카메라를 보세요.
          <br />
          버튼을 누르면 3초 뒤에 사진이 찍힙니다.
        </>
      ),
    },
  };
  const styleName = {
    description_p_style: ["white", "description"],
    counter_p_style: ["white", "counter"],
    icon_style: ["camera"],
    capture_btn_style: ["circle", "light-brown"],
    retake_btn_style: ["xs", "beige"],
    check_btn_style: ["xs", "light-brown"],
  };

  return (
    <div className={classNames("Page", "P16-1", "fade-in")}>
      <button className={classNames("back", "back-white")} onClick={goBack}></button>
      <SeparatedTemplate16_1 data={data} styleName={styleName}></SeparatedTemplate16_1>
    </div>
  );
}

export default P16_1;
