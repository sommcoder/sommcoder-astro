import downloadIcon from "../../assets/images/download-solid.svg";
import cv from "../../assets/pdf/Brian - Resume.pdf";

export default function DownloadBtn() {
  return (
    <button onClick={() => {}}>
      <a download="Brian's Resume" href={cv}>
        <img alt="download icon from font-awesome" src={downloadIcon} />
        Download CV
      </a>
    </button>
  );
}
