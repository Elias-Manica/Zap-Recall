export default function FrontQuestion({
  numberQuestion,
  front,
  setFront,
  setShow,
  colorText,
}) {
  function call() {
    setFront("hide");
    setShow("frontAnswer");
  }
  return (
    <>
      <div className={front}>
        <h2 className={colorText}>Pergunta {numberQuestion}</h2>
        <ion-icon name="play-circle-outline" onClick={() => call()}></ion-icon>
      </div>
    </>
  );
}
