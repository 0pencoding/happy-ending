import React, { useRef, useState, useCallback, useEffect } from "react";
import P from "../Atoms/P";
import Img from "../Atoms/Img";
import Icon from "../Atoms/Icon";
import Webcam from "react-webcam";
import Button from "../Atoms/Button";
import { Link } from "react-router-dom";
import CamIcon from "../../assets/icons/Camera icon.svg";

import "../../scss/Templates/SeparatedTemplate16_1.scss";

function SeparatedTemplate16_1({ data, styleName }) {
  const { prevent_click, p_data } = data;
  const { description_p_style, counter_p_style, icon_style, capture_btn_style, retake_btn_style, check_btn_style } = styleName;

  const videoConstraints = {
    width: { min: 496 },
    height: { min: 716 },
    aspectRatio: 0.7,
  };

  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [counter, setCounter] = useState(null);
  const [taken, setTaken] = useState(false);

  useEffect(() => {
    setImgSrc(JSON.parse(localStorage.getItem("photo")) ?? null);
  }, []);

  useEffect(() => {
    if (counter <= 0) return;
    const timeout = setTimeout(() => setCounter(counter - 1), 1000);
    return () => clearTimeout(timeout);
  }, [counter]);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const captureAfter3Sec = useCallback(() => {
    if (prevent_click.current) {
      setTaken(true);
      setCounter(3);
      setTimeout(capture, 3000);
    }
  }, [capture, prevent_click]);

  const retake = useCallback(() => {
    setTaken(false);
    setImgSrc(null);
    setCounter(null);
    localStorage.removeItem("photo");
  }, [setTaken, setImgSrc]);

  const savePhoto = useCallback(() => {
    localStorage.setItem("photo", JSON.stringify(imgSrc));
    console.log(localStorage);
  }, [imgSrc]);

  return (
    <div className={"SeparatedTemplate16_1"}>
      {!imgSrc && (
        <>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} mirrored={true}></Webcam>
          {!taken && (
            <>
              <Button className={"capture"} styleName={capture_btn_style} onClick={captureAfter3Sec}>
                <Icon alt="cam-icon" icon={CamIcon} styleName={icon_style} />
              </Button>
              <P styleName={description_p_style}>{p_data.text}</P>
            </>
          )}
          {taken && <P styleName={counter_p_style}>{counter}</P>}
        </>
      )}
      {imgSrc && (
        <>
          <Img image={imgSrc} alt="영정 사진" />
          <Button className={"retake"} styleName={retake_btn_style} onClick={retake}>
            다시찍기
          </Button>
          <Link to={"/p17"}>
            <Button styleName={check_btn_style} onClick={savePhoto}>
              확인
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default SeparatedTemplate16_1;
