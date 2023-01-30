import NavLeftContainer from "../NavLeftContainer/NavLeftContainer";
import NavRightContainer from "../NavRightContainer/NavRightContainer";

import "./NavBar.css";

export default function NavBar() {
  // const [isScrolling, setIsScrolling] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolling(window.scrollY > 0);
  //   };
  //   window.requestAnimationFrame(handleScroll);
  // }, []);

  return (
    <nav className="nav-bar">
      <NavLeftContainer />
      <NavRightContainer />
    </nav>
  );
}
