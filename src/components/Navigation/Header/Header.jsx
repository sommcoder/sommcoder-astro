import logo from "../../../../public/images/sommcoder-logo.svg";

export default function Header() {
  return (
    <a className="header" href="/index/">
      <img src={logo} />
    </a>
  );
}
