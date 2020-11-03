import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import SeparatedTemplate5 from "../Templates/SeparatedTemplate5";
import P5Vedio from "../../assets/videos/5-calender.mp4";

import "../../scss/pages.scss";

function P5({ history }) {
  let date = new Date();
  date.setDate(date.getDate() + 7);
  const { year = 2020, month = 11,day = 10 } = {
    year: date.getFullYear(),
    month: (date.getMonth()+1).toString().padStart(2, '0'),
    day: (date.getDate()).toString().padStart(2, '0'),
  }; 
  localStorage.setItem("deathYear", year);
  localStorage.setItem("deathMonth", month);
  localStorage.setItem("deathDay", day);

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
  };

  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: (
          <>
            당신은 운이 좋게도 당신의 사망일을 알 수 있게 되었습니다.
            <br />
            당신에게는 오늘로부터 인생을 정리할 일주일의 시간이 주어졌습니다.
          </>
        ),
      },
    },
    s1_data: {
      text: "예정 사망일",
    },
    s2_data: {
      text: `${year}. ${month}. ${day}`,
    },
    s3_data: {
      text: "탭하여 다음 페이지로 넘어가기",
    },
  };
  const styleName = {
    tp_style: ["fade-in-2s"],
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
    s1_style: ["noto", "xs", "eclipse", "medium"],
    s2_style: ["nanum", "xl", "eclipse", "extra-bold"],
    s3_style: ["noto", "xs", "davy-gray", "light", "fade-in-out-2s"],
  };
  return (
    <Link to={"/p6"} onClick={onClick}>
      <div className={classNames("Page", "P5", "bg-video", "fade-in")}>
        <video autoPlay muted loop>
          <source src={P5Vedio} type="video/mp4" />
        </video>
        <button className={classNames("back", "back-gray")} onClick={goBack}></button>
        <SeparatedTemplate5 data={data} styleName={styleName}></SeparatedTemplate5>
      </div>
    </Link>
  );
}

export default P5;
