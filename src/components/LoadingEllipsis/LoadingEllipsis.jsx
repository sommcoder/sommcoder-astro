import "./LoadingEllipsis.css";

export default function LoadingEllipsis() {
  const circlesArr = [1, 2, 3];

  return (
    <div className="loading-ellipsis">
      {circlesArr.map((i) => (
        <span key={i}></span>
      ))}
    </div>
  );
}
