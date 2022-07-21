import React from "react";

import FrontQuestion from "./FrontQuestion";
import ShowQuestion from "./ShowQuestion";
import AnswerVisible from "./AnswerVisible";
import BottomStatus from "./BottomStatus";

function Question({
  numberQuestion,
  question,
  answer,
  setCounter,
  counter,
  icons,
  setIcons,
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
        />
      </div>
    </div>
  );
}

export default function InicialDisplay() {
  const data = [
    {
      numberQuestion: 1,
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      numberQuestion: 2,
      question: "O React é __",
      answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      numberQuestion: 3,
      question: "Componentes devem iniciar com __ ",
      answer: "letra maiúscula",
    },
    {
      numberQuestion: 4,
      question: "Podemos colocar __ dentro do JSX",
      answer: "expressões",
    },
  ];
  const [counter, setCounter] = React.useState(0);
  const [icons, setIcons] = React.useState([]);
  return (
    <div className="inicialDisplay ">
      <div className="tittle">
        <img src="./images/light.png" alt=""></img>
        <h1>ZapRecall</h1>
      </div>
      <div className="questions">
        {data.map((item, index) => (
          <Question
            numberQuestion={item.numberQuestion}
            key={index}
            question={item.question}
            answer={item.answer}
            counter={counter}
            setCounter={setCounter}
            icons={icons}
            setIcons={setIcons}
          />
        ))}
      </div>

      <BottomStatus counter={counter} icons={icons} />
    </div>
  );
}
