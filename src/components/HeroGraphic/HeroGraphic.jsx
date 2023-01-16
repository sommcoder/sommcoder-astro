import wine from "../../../public/images/wine-stain.svg";
import "./HeroGraphic.css";

export default function HeroGraphic() {
  return (
    <div className="hero-graphic">
      <img alt="Wine Stain Graphic" src={wine} />
    </div>
  );
}
