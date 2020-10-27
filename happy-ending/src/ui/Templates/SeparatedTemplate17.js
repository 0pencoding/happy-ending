import React from "react";
import Img from "../Atoms/Img";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Dquestion from "../Organisms/Dquestion";
import P17Video from "../../assets/videos/17_front.mp4";

import "../../scss/Templates/SeparatedTemplate17.scss";

function SeparatedTemplate17({ data, styleName, history }) {
  const { dq_data, imgs } = data;
  const { tp_style, dq_style } = styleName;

  const onClick = (e) => {
    e.preventDefault();

    const flowerName = e.target.className;
    localStorage.setItem("flower", flowerName);
    console.log(localStorage);

    setTimeout(() => {
      history.push("/p18");
    }, 2000);
  };

  return (
    <div className={classNames("SeparatedTemplate17", tp_style)}>
      <video autoPlay muted>
        <source src={P17Video} type="video/mp4" />
      </video>
      {imgs.map((img, index) => (
        <>
          {/* <Img image={img.glow} alt={img.alt}></Img> */}
          <Img image={img.shadow} alt={img.alt}></Img>
          <Img image={img.image} alt={img.alt}></Img>
        </>
      ))}
      {imgs.map((img, index) => (
        <Link to={"/p18"} key={index} className={img.alt} onClick={onClick}></Link>
      ))}
      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
    </div>
  );
}

export default SeparatedTemplate17;
