import IntroContainer from "../IntroContainer/IntroContainer";
import HeroGraphic from "../HeroGraphic/HeroGraphic";
import LoadingEllipsis from "../LoadingEllipsis/LoadingEllipsis";

import "./HeroSection.css";

import { Suspense } from "react";

export default function HeroSection() {
  return (
    <Suspense fallback={<LoadingEllipsis />}>
      <span className="hero-section">
        <IntroContainer />
        <HeroGraphic />
      </span>
    </Suspense>
  );
}
