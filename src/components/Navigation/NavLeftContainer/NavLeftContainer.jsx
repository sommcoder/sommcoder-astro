import Header from "../Header/Header";
import { useRef } from "react";

// import "./NavLeftContainer.css";

export default function NavLeftContainer() {
  const headerRef = useRef();

  const style = {
    display: "grid",
    " position": "static",
    margin: "auto",
    "justify-content": "left",
    width: "100%",
  };

  return (
    <span
      className="nav-container-left"
      style={style}
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
