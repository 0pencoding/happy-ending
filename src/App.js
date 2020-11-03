import React, { useEffect, useRef } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import P0 from "./ui/Pages/P0";
import P1 from "./ui/Pages/P1";
import P2 from "./ui/Pages/P2";
import P3 from "./ui/Pages/P3";
import P4 from "./ui/Pages/P4";
import P5 from "./ui/Pages/P5";
import P6 from "./ui/Pages/P6";
import P7 from "./ui/Pages/P7";
import P7_1 from "./ui/Pages/P7_1";
import P7_2 from "./ui/Pages/P7_2";
import P8 from "./ui/Pages/P8";
import P8_1 from "./ui/Pages/P8_1";
import P8_1_1 from "./ui/Pages/P8_1_1";
import P8_1_2 from "./ui/Pages/P8_1_2";
import P8_2 from "./ui/Pages/P8_2";
import P8_2_1 from "./ui/Pages/P8_2_1";
import P8_2_2 from "./ui/Pages/P8_2_2";
import P9_1 from "./ui/Pages/P9_1";
import P9_2 from "./ui/Pages/P9_2";
import P10 from "./ui/Pages/P10";
import P11 from "./ui/Pages/P11";
import P12_1 from "./ui/Pages/P12_1";
import P12_2 from "./ui/Pages/P12_2";
import P13 from "./ui/Pages/P13";
import P14 from "./ui/Pages/P14";
import P15 from "./ui/Pages/P15";
import P16 from "./ui/Pages/P16";
import P16_1 from "./ui/Pages/P16_1";
import P17 from "./ui/Pages/P17";
import P18 from "./ui/Pages/P18";
import P19 from "./ui/Pages/P19";
import P20 from "./ui/Pages/P20";
import P21 from "./ui/Pages/P21";
import P22 from "./ui/Pages/P22";
import P23 from "./ui/Pages/P23";
import P24 from "./ui/Pages/P24";
import P25 from "./ui/Pages/P25";
import P26 from "./ui/Pages/P26";
import P27 from "./ui/Pages/P27";
import P29 from "./ui/Pages/P29";
import P404 from "./ui/Pages/P404";

import game from "./assets/audios/Game BGM.mp3";
import hearbeat from "./assets/audios/heartbeat.mp3";
import nature from "./assets/audios/Nature BGM.mp3";

import "./App.css";

function App() {
  const bgm = useRef(null);
  const location = useLocation();
  useEffect(() => {
    let addr1, addr2;

    switch(location.pathname) {
      case "/": 
        bgm.current.src = game;
        break;
      case "/p2": case "/p3": case "/p4": case "/p5": 
      case "/p6": case "/p7": case "/p7_1": case "/p7_2": case "/p8": 
      case "/p8_1": case "/p8_1_1": case "/p8_1_2": case "/p8_2": 
      case "/p8_2_1": case "/p8_2_2": case "/p9_1": case "/p9_2": 
      case "/p10": case "/p11": case "/p12_1": case "/p12_2": 
      case "/p13": case "/p14": case "/p15": case "/p16": case "/p16_1": 
      case "/p17": case "/p18": case "/p19": case "/p20": case "/p21": 
      case "/p22": case "/p23": case "/p24": 
        addr1 = bgm.current.src.split(".");
        addr2 = game.split(".");
        if (addr1[3] !== addr2[1]) {
          bgm.current.src = game;
          bgm.current.loop = true;
        }
        break;
      case "/p25":
        addr1 = bgm.current.src.split(".");
        addr2 = hearbeat.split(".");
        if (addr1[3] !== addr2[1]) {
          bgm.current.src = hearbeat;
          bgm.current.loop = false;
        }
        break;
      case "/p26": case "/p27": case "/p0":
        addr1 = bgm.current.src.split(".");
        addr2 = nature.split(".");
        if (addr1[3] !== addr2[1]) {
          bgm.current.src = nature;
          bgm.current.loop = true;
        }
        break;
      default:
        bgm.current.pause();
    }
  }, [location])

  return (
    <div>
      <audio autoPlay ref={bgm}>
        <source src={game}></source>
      </audio>
      <Switch>
        <Route path="/" component={P1} exact />
        <Route path="/p0" component={P0} />
        <Route path="/p2" component={P2} />
        <Route path="/p3" component={P3} />
        <Route path="/p4" component={P4} />
        <Route path="/p5" component={P5} />
        <Route path="/p6" component={P6} />
        <Route path="/p7" component={P7} exact />
        <Route path="/p7_1" component={P7_1} />
        <Route path="/p7_2" component={P7_2} />
        <Route path="/p8" component={P8} exact />
        <Route path="/p8_1" component={P8_1} exact />
        <Route path="/p8_1_1" component={P8_1_1} />
        <Route path="/p8_1_2" component={P8_1_2} />
        <Route path="/p8_2" component={P8_2} exact />
        <Route path="/p8_2_1" component={P8_2_1} />
        <Route path="/p8_2_2" component={P8_2_2} />
        <Route path="/p9_1" component={P9_1} />
        <Route path="/p9_2" component={P9_2} />
        <Route path="/p10" component={P10} />
        <Route path="/p11" component={P11} />
        <Route path="/p12_1" component={P12_1} />
        <Route path="/p12_2" component={P12_2} />
        <Route path="/p13" component={P13} />
        <Route path="/p14" component={P14} />
        <Route path="/p15" component={P15} />
        <Route path="/p16" component={P16} exact />
        <Route path="/p16_1" component={P16_1} />
        <Route path="/p17" component={P17} />
        <Route path="/p18" component={P18} />
        <Route path="/p19" component={P19} />
        <Route path="/p20" component={P20} />
        <Route path="/p21" component={P21} />
        <Route path="/p22" component={P22} />
        <Route path="/p23" component={P23} />
        <Route path="/p24" component={P24} />
        <Route path="/p25" component={P25} />
        <Route path="/p26" component={P26} />
        <Route path="/p27" component={P27} />
        <Route path="/p29" component={P29} />
        <Route component={P404} />
      </Switch>
    </div>
  );
}

export default App;
