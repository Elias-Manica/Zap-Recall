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
  dataAnswer,
  setDataAnswer,
}) {
  function hideAnswer(option) {
    if (counter === 3) {
      setCounter((counter = counter + 1));
      if (dataAnswer >= 1) {
        console.log("acabou e perdeu");
      } else {
        console.log("acabou e ganhou");
      }
    } else {
      console.log("ainda tem mais");
      setCounter((counter = counter + 1));
    }

    setVisibleAnswer("hide");
    setFront("frontQuestion noClick");
    if (option === "Zap") {
      setColorText("green");
      setIcon("checkmark-circle-sharp");
      setIcons([...icons, <ion-icon name="checkmark-circle-sharp"></ion-icon>]);
      setDataAnswer((dataAnswer = dataAnswer + 0));
      console.log(dataAnswer);
    } else if (option === "Quase não lembrei") {
      setColorText("orange");
      setIcon("help-circle-sharp");
      setIcons([...icons, <ion-icon name="help-circle-sharp"></ion-icon>]);
      setDataAnswer((dataAnswer = dataAnswer + 0));
      console.log(dataAnswer);
    } else if (option === "Não lembrei") {
      setColorText("red");
      setIcon("close-circle-sharp");
      setIcons([...icons, <ion-icon name="close-circle-sharp"></ion-icon>]);
      setDataAnswer((dataAnswer = dataAnswer + 1));
      console.log(dataAnswer);
    }
    console.log(icons);
    console.log(dataAnswer);
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
