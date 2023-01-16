import "./NavLeftContainer.css";
import Header from "../Header/Header";
import { useRef } from "react";

export default function NavLeftContainer() {
  const headerRef = useRef();
  return (
    <span
      className="nav-container-left"
      ref={headerRef}
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
    >
      <Header />
    </span>
  );
}
