import "./CarouselItem.css";

export default function CarouselItem({ thumbnail, title, link, short }) {
  function linkToProject(e) {
    e.preventDefault();
    window.open(link, "_blank");
  }

  return (
    <a className="carousel-item" onClick={linkToProject} href={link}>
      <h3 className="carousel-item-title">{title}</h3>
      <img className="carousel-item-img" src={thumbnail} />

      <p className="carousel-item-description">{short}</p>
    </a>
  );
}
