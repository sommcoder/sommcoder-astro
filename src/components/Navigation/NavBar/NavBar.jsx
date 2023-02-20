import NavLeftContainer from "../NavLeftContainer/NavLeftContainer";
import NavRightContainer from "../NavRightContainer/NavRightContainer";

import "./NavBar.css";

export default function NavBar() {
  const style = {
    position: "sticky",
    top: "0px",
    "z-index": "2",
    "overflow-x": "clip",
    display: "grid",
    "grid-template-columns": "repeat(2, 1fr)",
    padding: "0.5rem 3rem 0.5rem 3rem",
    "max-width": "100%",
    height: "6rem",
    background: "#324935",
    transition: "0.3s ease-in-out",
  };

  // const [isScrolling, setIsScrolling] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolling(window.scrollY > 0);
  //   };
  //   window.requestAnimationFrame(handleScroll);
  // }, []);

  return (
    <nav style={style} className="nav-bar">
      <NavLeftContainer />
      <NavRightContainer />
    </nav>
  );
}
