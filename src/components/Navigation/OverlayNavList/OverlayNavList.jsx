import "./OverlayNavList.css";

export default function OverlayNavList() {
  const NavItems = ["Github", "LinkedIn"];

  return (
    <ul className="overlay-nav-list">
      {NavItems.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
