import IntroDescription from "../IntroDescription/IntroDescription";
import HireMeBtn from "../HireMeBtn/HireMeBtn";
import IntroHeader from "../IntroHeader/IntroHeader";

import "./IntroContainer.css";

import wineDrip from "../../assets/images/wine-drips.svg";
import wineDrip2 from "../../assets/images/wine-drips2.svg";

import { lazy } from "react";

const IntroImage = lazy(() => import("../IntroImage/IntroImage"));

export default function IntroContainer() {
  return (
    <div className="intro-container">
      <img className="wine-drip-1" src={wineDrip} />
      <IntroHeader />
      <IntroImage headshot="headshot" />
      <IntroDescription />
      <div className="intro-container-lower-section">
        <img className="wine-drip-2" src={wineDrip2} />
        <HireMeBtn />
      </div>
    </div>
  );
}
