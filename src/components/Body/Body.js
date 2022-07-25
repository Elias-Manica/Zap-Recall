import React from "react";

import "../assets/css/reset.css";
import "../assets/css/style.css";
import "./style.css";

import WelcomeUser from "../WelcomeUser/WelcomeUser";
import InicialDisplay from "../InicialDisplay/InicialDisplay";

export default function Body() {
  const [changeScreen, setChangeScreen] = React.useState(true);
  const [group, setGroup] = React.useState([
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
  ]);

  return (
    <div className="allScreens">
      <>
        {changeScreen ? (
          <>
            <WelcomeUser />
            <div
              className="buttomStart"
              onClick={() => setChangeScreen(!changeScreen)}
            >
              <p>Iniciar Recall!</p>
            </div>
          </>
        ) : (
          <InicialDisplay group={group} setGroup={setGroup} />
        )}
      </>
    </div>
  );
}
