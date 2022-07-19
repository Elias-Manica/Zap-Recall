function Question({ numberQuestion }) {
  return (
    <div className="question">
      <div className="frontQuestion hide">
        <h2>Pergunta {numberQuestion}</h2>
        <ion-icon
          name="play-circle-outline"
          onClick={() => console.log(`você clicou na carta ${numberQuestion}`)}
        ></ion-icon>
      </div>

      <div className="question-visible ">
        <div className="frontAnswer hide">
          <p className="">O que é JSX?</p>
          <ion-icon name="return-down-back-outline"></ion-icon>
        </div>
        <div className="answer-visible ">
          <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
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
    },
    {
      numberQuestion: 2,
    },
    {
      numberQuestion: 3,
    },
    {
      numberQuestion: 4,
    },
  ];

  return (
    <div className="inicialDisplay">
      <div className="tittle">
        <img src="./images/light.png" alt=""></img>
        <h1>ZapRecall</h1>
      </div>
      <div className="questions">
        {data.map((item) => (
          <Question numberQuestion={item.numberQuestion} />
        ))}
      </div>

      <div className="bottomStatus">
        <p>0/4 CONCLUÍDOS</p>
      </div>
    </div>
  );
}
