export default function AnswerVisible({
  answer,
  visibleAnswer,
  setVisibleAnswer,
  setCounter,
  counter,
  setFront,
  setColorText,
  setIcon,
  icons,
  setIcons,
}) {
  function hideAnswer(option) {
    setCounter((counter = counter + 1));
    setVisibleAnswer("hide");
    setFront("frontQuestion");
    if (option === "Zap") {
      setColorText("green");
      setIcon("checkmark-circle-sharp");
      setIcons([...icons, <ion-icon name="checkmark-circle-sharp"></ion-icon>]);
    } else if (option === "Quase não lembrei") {
      setColorText("orange");
      setIcon("help-circle-sharp");
      setIcons([...icons, <ion-icon name="help-circle-sharp"></ion-icon>]);
    } else if (option === "Não lembrei") {
      setColorText("red");
      setIcon("close-circle-sharp");
      setIcons([...icons, <ion-icon name="close-circle-sharp"></ion-icon>]);
    }
  }

  return (
    <>
      <div className={visibleAnswer}>
        <p>{answer}</p>
        <div className="answers">
          <div
            className="dontRemember"
            onClick={() => hideAnswer("Não lembrei")}
          >
            <p>Não lembrei</p>
          </div>
          <div
            className="almostRemember"
            onClick={() => hideAnswer("Quase não lembrei")}
          >
            <p>Quase não lembrei</p>
          </div>
          <div className="remember" onClick={() => hideAnswer("Zap")}>
            <p>Zap</p>
          </div>
        </div>
      </div>
    </>
  );
}
