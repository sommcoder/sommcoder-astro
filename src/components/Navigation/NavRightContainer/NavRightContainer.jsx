import DownloadBtn from "../DownloadBtn/DownloadBtn";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import NavIconBox from "../NavIconBox/NavIconBox";

// icons:
import linkedin from "../../../../public/images/linkedin.svg";
import github from "../../../../public/images/github.svg";

import "./NavRightContainer.css";

export default function NavRightContainer() {
  const icons = [
    {
      name: "linked-in",
      image: linkedin,
      link: "https://www.linkedin.com/in/brian-davies-178b0b48/",
    },
    { name: "github", image: github, link: "https://github.com/sommcoder" },
  ];

  return (
    <span className="nav-container-right">
      {icons.map(({ name, image, link }) => (
        <NavIconBox key={name} image={image} link={link} />
      ))}
      <DownloadBtn />
      <HamburgerMenu />
    </span>
  );
}
