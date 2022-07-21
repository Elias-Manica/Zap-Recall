export default function AnswerVisible({
  answer,
  visibleAnswer,
  setVisibleAnswer,
  setCounter,
  counter,
}) {
  function hideAnswer() {
    setCounter((counter = counter + 1));
    setVisibleAnswer("hide");
  }

  return (
    <>
      <div className={visibleAnswer}>
        <p>{answer}</p>
        <div className="answers">
          <div className="dontRemember" onClick={() => hideAnswer()}>
            <p>Não lembrei</p>
          </div>
          <div className="almostRemember" onClick={() => hideAnswer()}>
            <p>Quase não lembrei</p>
          </div>
          <div className="remember" onClick={() => hideAnswer()}>
            <p>Zap</p>
          </div>
        </div>
      </div>
    </>
  );
}
