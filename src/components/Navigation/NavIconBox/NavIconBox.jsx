import "./NavIconBox.css";

export default function NavIconBox({ link, image }) {
  return (
    <a className="nav-icon-box" target="_blank" href={link}>
      <img src={image} />
    </a>
  );
}
