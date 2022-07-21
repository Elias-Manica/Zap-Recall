export default function AnswerVisible({
  answer,
  visibleAnswer,
  setVisibleAnswer,
  setCounter,
  counter,
  setFront,
  setColorText,
}) {
  function hideAnswer(e) {
    setCounter((counter = counter + 1));
    setVisibleAnswer("hide");
    setFront("frontQuestion");
    if (e.target.innerHTML === "<p>Zap</p>" || e.target.innerHTML === "Zap") {
      setColorText("green");
    } else if (
      e.target.innerHTML === "Quase não lembrei" ||
      e.target.innerHTML === "<p>Quase não lembrei</p>"
    ) {
      setColorText("orange");
    } else if (
      e.target.innerHTML === "Não lembrei" ||
      e.target.innerHTML === "<p>Não lembrei</p>"
    ) {
      setColorText("red");
    }
  }

  return (
    <>
      <div className={visibleAnswer}>
        <p>{answer}</p>
        <div className="answers">
          <div className="dontRemember" onClick={(e) => hideAnswer(e)}>
            <p>Não lembrei</p>
          </div>
          <div className="almostRemember" onClick={(e) => hideAnswer(e)}>
            <p>Quase não lembrei</p>
          </div>
          <div className="remember" onClick={(e) => hideAnswer(e)}>
            <p>Zap</p>
          </div>
        </div>
      </div>
    </>
  );
}
