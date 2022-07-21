import FrontQuestion from "./FrontQuestion";
import ShowQuestion from "./ShowQuestion";
import AnswerVisible from "./AnswerVisible";

function Question({ numberQuestion, question, answer }) {
  return (
    <div className="question">
      <FrontQuestion numberQuestion={numberQuestion} />

      <div className="question-visible ">
        <ShowQuestion question={question} />
        <AnswerVisible answer={answer} />
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
          />
        ))}
      </div>

      <div className="bottomStatus">
        <p>0/4 CONCLUÍDOS</p>
      </div>
    </div>
  );
}
