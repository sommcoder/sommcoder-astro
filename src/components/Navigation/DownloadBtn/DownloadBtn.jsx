import downloadIcon from "../../../../public/images/download-solid.svg";
import cv from "../../../../public/pdf/Brian - Resume.pdf";

import "./DownloadBtn.css";

export default function DownloadBtn() {
  return (
    <button className="download-button" onClick={() => {}}>
      <a className="download-link" download="Brian's Resume" href={cv}>
        <img
          className="download-icon"
          alt="download icon from font-awesome"
          src={downloadIcon}
        />
        Download CV
      </a>
    </button>
  );
}
