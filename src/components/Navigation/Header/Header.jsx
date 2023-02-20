import logo from "../../../../public/images/sommcoder-logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <a className="header" href="/index/">
      <img className="header-image-logo" src={logo} />
    </a>
  );
}
