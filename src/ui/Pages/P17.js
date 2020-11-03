import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import SeparatedTemplate17 from "../Templates/SeparatedTemplate17";
import F1 from "../../assets/images/17p_images/1F.png";
import SD1 from "../../assets/images/17p_images/1SD.png";
import GW1 from "../../assets/images/17p_images/1GW.png";
import F2 from "../../assets/images/17p_images/2F.png";
import SD2 from "../../assets/images/17p_images/2SD.png";
import GW2 from "../../assets/images/17p_images/2GW.png";
import F3 from "../../assets/images/17p_images/3F.png";
import SD3 from "../../assets/images/17p_images/3SD.png";
import GW3 from "../../assets/images/17p_images/3GW.png";
import F4 from "../../assets/images/17p_images/4F.png";
import SD4 from "../../assets/images/17p_images/4SD.png";
import GW4 from "../../assets/images/17p_images/4GW.png";
import F5 from "../../assets/images/17p_images/5F.png";
import SD5 from "../../assets/images/17p_images/5SD.png";
import GW5 from "../../assets/images/17p_images/5GW.png";

import "../../scss/pages.scss";

function P17({ history }) {
  const click = useRef(false);

  useEffect(() => {
    setTimeout(() => click.current = true, 3000);
  }, []);

  const goBack = () => {
    history.goBack();
  };

  const data = {
    prevent_click: click,
    dq_data: {
      h3_data: {
        day: 3,
      },
      p_data: {
        question: (
          <>
            사진관을 나와 집으로 돌아가던 중, 동네 꽃집의 꽃들을 보았습니다.
            <br />
            사흘 후에 있을 당신의 장례식에 헌화될 특별한 의미가 담긴 꽃을 골라주세요.
          </>
        ),
      },
    },
    flowers: [
      {
        image: F1,
        shadow: SD1,
        glow: GW1,
        active: false,
        alt: "rose",
      },
      {
        image: F2,
        shadow: SD2,
        glow: GW2,
        active: false,
        alt: "freesia",
      },
      {
        image: F3,
        shadow: SD3,
        glow: GW3,
        active: false,
        alt: "babyBreath",
      },
      {
        image: F4,
        shadow: SD4,
        glow: GW4,
        active: false,
        alt: "tulip",
      },
      {
        image: F5,
        shadow: SD5,
        glow: GW5,
        active: false,
        alt: "mum",
      },
    ],
  };
  const styleName = {
    tp_style: ["fade-in-2s"],
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
  };

  return (
    <div className={classNames("Page", "P17", "fade-in")}>
      <SeparatedTemplate17 data={data} styleName={styleName} history={history}></SeparatedTemplate17>
      <button className={classNames("back", "back-gray")} onClick={goBack}></button>
    </div>
  );
}

export default P17;
