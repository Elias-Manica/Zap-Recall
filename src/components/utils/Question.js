import React from "react";

import "../assets/css/style.css";

import AnswerVisible from "../AnswerVisible/AnswerVisible";
import FrontQuestion from "../FrontQuestion/FrontQuestion";
import ShowQuestion from "../ShowQuestions/ShowQuestion";

export default function Question({
  numberQuestion,
  question,
  answer,
  setCounter,
  counter,
  icons,
  setIcons,
  counterAnswer,
  setCounterAnswer,
  setMsgFinal,
  setRestart,
}) {
  const [front, setFront] = React.useState("frontQuestion");
  const [show, setShow] = React.useState("hide");
  const [visibleAnswer, setVisibleAnswer] = React.useState("hide");
  const [colorText, setColorText] = React.useState("black");
  const [icon, setIcon] = React.useState("play-circle-outline");

  return (
    <div className="question">
      <FrontQuestion
        numberQuestion={numberQuestion}
        front={front}
        setFront={setFront}
        setShow={setShow}
        colorText={colorText}
        icon={icon}
      />

      <div className="question-visible ">
        <ShowQuestion
          question={question}
          show={show}
          setShow={setShow}
          setVisibleAnswer={setVisibleAnswer}
        />
        <AnswerVisible
          answer={answer}
          visibleAnswer={visibleAnswer}
          setVisibleAnswer={setVisibleAnswer}
          counter={counter}
          setCounter={setCounter}
          setFront={setFront}
          setColorText={setColorText}
          setIcon={setIcon}
          icons={icons}
          setIcons={setIcons}
          counterAnswer={counterAnswer}
          setCounterAnswer={setCounterAnswer}
          setMsgFinal={setMsgFinal}
          setRestart={setRestart}
        />
      </div>
    </div>
  );
}
