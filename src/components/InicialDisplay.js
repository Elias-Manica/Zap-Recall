import React from "react";

import FrontQuestion from "./FrontQuestion";
import ShowQuestion from "./ShowQuestion";
import AnswerVisible from "./AnswerVisible";
import BottomStatus from "./BottomStatus";
import Tittle from "./Tittle";

function Question({
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
        />
      </div>
    </div>
  );
}

export default function InicialDisplay() {
  const data = [
    {
      numb: 1,
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      question: "O React é __",
      answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      question: "Componentes devem iniciar com __ ",
      answer: "letra maiúscula",
    },
    {
      question: "Podemos colocar __ dentro do JSX",
      answer: "expressões",
    },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "passar diferentes informações para componentes",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  function shuffleArray(inputArray) {
    inputArray.sort(() => Math.random() - 0.5);
  }

  shuffleArray(data);

  function selectFourCard(array) {
    return array.splice(0, 4);
  }

  selectFourCard(data);

  const [counter, setCounter] = React.useState(0);
  const [icons, setIcons] = React.useState([]);
  const [counterAnswer, setCounterAnswer] = React.useState(0);
  const [msgFinal, setMsgFinal] = React.useState([[""], [""]]);

  return (
    <div className="inicialDisplay ">
      <Tittle />
      <div className="questions">
        {data.map((item, index) => (
          <Question
            numberQuestion={index}
            key={index}
            question={item.question}
            answer={item.answer}
            counter={counter}
            setCounter={setCounter}
            icons={icons}
            setIcons={setIcons}
            counterAnswer={counterAnswer}
            setCounterAnswer={setCounterAnswer}
            msgFinal={msgFinal}
            setMsgFinal={setMsgFinal}
          />
        ))}
      </div>

      <BottomStatus
        counter={counter}
        icons={icons}
        msgFinal={msgFinal}
        setMsgFinal={setMsgFinal}
      />
    </div>
  );
}
