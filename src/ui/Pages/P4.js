import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import useInputs from "../useInputs";
import SeparatedTemplate4 from "../Templates/SeparatedTemplate4";
import P4Vedio from "../../assets/videos/4-book.mp4";

import "../../scss/pages.scss";

function P4({ history }) {
  const click = useRef(false);

  useEffect(() => {
    setTimeout(() => click.current = true, 6000);
  }, []);

  const onClick = (e) => {
    if (!click.current)
      e.preventDefault();
  };

  const [inputs, onChange] = useInputs({
    name: localStorage.getItem("name") ?? "",
    year: localStorage.getItem("year") ?? "",
    month: localStorage.getItem("month") ?? "",
    day: localStorage.getItem("day") ?? "",
    isValidate: localStorage.getItem("name")&&localStorage.getItem("year")
                &&localStorage.getItem("month")&&localStorage.getItem("day")? true : false,
  });
  
  const goBack = () => {
    history.goBack();
  };

  const data = {
    p_data: {
      text: (
        <>
          좋은 결말이 한 권의 책을 완성하는 것처럼
          <br />
          인생의 결말이 삶을 완성합니다.
          <br />
          여기 당신의 인생이라는 책이 있습니다.
          <br />
          이 책의 엔딩은 아직 정해지지 않았습니다.
          <br />
          당신의 마지막 페이지를 완성하세요.
          <br />
          <br />
          이 이야기는 지극히 당신만의 이야기이므로
          <br />
          편안히 써내려가시면 됩니다.
        </>
      ),
    },
    irpns_data: {
      validate: inputs.isValidate,
      prevent_click: onClick,
      info_data: {
        inputs: inputs,
        names: ["name", "year", "month", "day"],
        onChange: onChange,
      }
    }
  };
  const styleName = {
    tp_style: ["fade-in-5s"],
    p_style: ["eclipse"],
  };
  return (
    <div className={classNames("Page", "P4", "bg-video", "fade-in")}>
      <video autoPlay muted>
        <source src={P4Vedio} type="video/mp4" />
      </video>
      <button className={classNames("back", "back-gray")} onClick={goBack}></button>
      <SeparatedTemplate4 data={data} styleName={styleName}></SeparatedTemplate4>
    </div>
  );
}

export default P4;
