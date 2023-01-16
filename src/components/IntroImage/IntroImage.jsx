import styled from "styled-components";
import headshot from "../../assets/images/headshot.png";

export default function IntroImage() {
  return (
    <span className="intro-image-headshot">
      <img image alt="Brian Davies Headshot" src={headshot} />
    </span>
  );
}
