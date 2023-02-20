import "./IntroImage.css";
import headshot from "../../../../public/images/headshot.png";

export default function IntroImage() {
  return (
    <span className="intro-image-container">
      <img
        className="intro-image"
        image
        alt="Brian Davies Headshot"
        src={headshot}
      />
    </span>
  );
}
