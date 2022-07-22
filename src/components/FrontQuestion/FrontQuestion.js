import "./style.css";

export default function FrontQuestion({
  numberQuestion,
  front,
  setFront,
  setShow,
  colorText,
  icon,
}) {
  function call() {
    setFront("hide");
    setShow("frontAnswer");
  }
  return (
    <>
      <div className={front}>
        <h2 className={colorText}>Pergunta {numberQuestion + 1}</h2>
        <ion-icon name={icon} onClick={() => call()}></ion-icon>
      </div>
    </>
  );
}
