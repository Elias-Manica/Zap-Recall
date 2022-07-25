import React from "react";

import "../assets/css/style.css";
import "./style.css";

import BottomStatus from "../BottomStatus/BottomStatus";
import Tittle from "../Tittle/Tittle";

import selectFourCard from "../utils/selectFourCard";
import shuffleArray from "../utils/shuffleArray";
import Question from "../utils/Question";
let variavel;

export default function InicialDisplay({ group }) {
  console.log(group);
  const data = group;

  if (variavel === undefined) {
    shuffleArray(data);
    selectFourCard(data);
    variavel = "done";
    console.log("embaralhou");
  }

  const [counter, setCounter] = React.useState(0);
  const [icons, setIcons] = React.useState([]);
  const [counterAnswer, setCounterAnswer] = React.useState(0);
  const [msgFinal, setMsgFinal] = React.useState([[""], [""]]);
  const [restart, setRestart] = React.useState("hide");

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
            setRestart={setRestart}
          />
        ))}
      </div>

      <BottomStatus
        counter={counter}
        icons={icons}
        msgFinal={msgFinal}
        setMsgFinal={setMsgFinal}
        restart={restart}
      />
    </div>
  );
}
