function Question({ numberQuestion, question, answer }) {
  return (
    <div className="question">
      <div className="frontQuestion ">
        <h2>Pergunta {numberQuestion}</h2>
        <ion-icon
          name="play-circle-outline"
          onClick={() => console.log(`você clicou na carta ${numberQuestion}`)}
        ></ion-icon>
      </div>

      <div className="question-visible ">
        <div className="frontAnswer hide">
          <p className="">{question}</p>
          <ion-icon name="return-down-back-outline"></ion-icon>
        </div>
        <div className="answer-visible hide">
          <p>{answer}</p>
          <div className="answers">
            <div className="dontRemember">
              <p>Não lembrei</p>
            </div>
            <div className="almostRemember">
              <p>Quase não lembrei</p>
            </div>
            <div className="remember">
              <p>Zap</p>
            </div>
          </div>
        </div>
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
