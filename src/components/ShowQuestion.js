export default function ShowQuestion({
  question,
  show,
  setShow,
  setVisibleAnswer,
}) {
  function hideQuestion() {
    setShow("hide");
    setVisibleAnswer("answer-visible");
  }
  return (
    <>
      <div className={show}>
        <p className="">{question}</p>
        <ion-icon
          name="return-down-back-outline"
          onClick={() => hideQuestion()}
        ></ion-icon>
      </div>
    </>
  );
}
