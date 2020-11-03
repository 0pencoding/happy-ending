import React, { useState } from "react";
import Img from "../Atoms/Img";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Dquestion from "../Organisms/Dquestion";
import P17Video from "../../assets/videos/17_front.mp4";

import "../../scss/Templates/SeparatedTemplate17.scss";

function SeparatedTemplate17({ data, styleName, history }) {
  const { prevent_click, dq_data, flowers } = data;
  const { tp_style, dq_style } = styleName;

  const [selectable, setSelectable] = useState(true);
  const [constrasts, setConstrasts] = useState(flowers);

  const onClick = (e) => {
    e.preventDefault();

    if (prevent_click.current) {
      const flowerName = e.target.id;
      setConstrasts(constrasts.map((constrast) => (constrast.alt === flowerName ? { ...constrast, active: true } : constrast)));
      setSelectable(false);

      localStorage.setItem("flower", flowerName);
      console.log(localStorage);

      setTimeout(() => {
        history.push("/p18");
      }, 3000);
    }
  };

  return (
    <div className={classNames("SeparatedTemplate17", tp_style)}>
      <video autoPlay muted>
        <source src={P17Video} type="video/mp4" />
      </video>
      {constrasts.map((flower, idx) => (
        <div key={idx}>
          <Img styleName={flower.active ? "fade-in-ease-in" : ""} image={flower.active ? flower.glow : flower.shadow} alt={flower.alt}></Img>
          <Img image={flower.image} alt={flower.alt}></Img>
          {selectable && <Link to={"/p18"} id={flower.alt} onClick={onClick}></Link>}
        </div>
      ))}

      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
    </div>
  );
}

export default SeparatedTemplate17;
