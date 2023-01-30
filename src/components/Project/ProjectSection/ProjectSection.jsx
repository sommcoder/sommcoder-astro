import "./ProjectSection.css";

import CarouselArrowLeft from "../CarouselArrowLeft/CarouselArrowLeft";
import CarouselArrowRight from "../CarouselArrowRight/CarouselArrowRight";
import CarouselSection from "../CarouselSection/CarouselSection";

import { Suspense } from "react";
import LoadingEllipsis from "../../Utility/LoadingEllipsis/LoadingEllipsis";

export default function ProjectSection() {
  return (
    <Suspense fallback={<LoadingEllipsis />}>
      <div className="project-section">
        <CarouselArrowLeft />
        <CarouselSection />
        <CarouselArrowRight />
      </div>
    </Suspense>
  );
}
