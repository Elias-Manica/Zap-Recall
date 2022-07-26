import React from "react";

import "../assets/css/reset.css";
import "../assets/css/style.css";
import "./style.css";

import WelcomeUser from "../WelcomeUser/WelcomeUser";
import InicialDisplay from "../InicialDisplay/InicialDisplay";

export default function Body({
  react,
  setreact,
  html,
  setHtml,
  python,
  setPython,
}) {
  const [changeScreen, setChangeScreen] = React.useState(true);
  const [number, setNumber] = React.useState();
  function selectOption() {
    let select = document.getElementById("deck");
    let opcaoTexto = select.options[select.selectedIndex].value;
    if (Number(opcaoTexto) === 1) {
      setNumber(1);
    } else if (Number(opcaoTexto) === 2) {
      setNumber(2);
    } else if (Number(opcaoTexto) === 3) {
      setNumber(3);
    }
    setChangeScreen(false);
  }

  return (
    <div className="allScreens">
      <>
        {changeScreen ? (
          <>
            <WelcomeUser />
            <select id="deck">
              <option value={1}>React</option>
              <option value={2}>HTML/CSS/JS</option>
              <option value={3}>Python</option>
            </select>
            <div className="buttomStart" onClick={() => selectOption()}>
              <p>Iniciar Recall!</p>
            </div>
          </>
        ) : (
          <InicialDisplay
            react={react}
            setreact={setreact}
            number={number}
            html={html}
            setHtml={setHtml}
            python={python}
            setPython={setPython}
          />
        )}
      </>
    </div>
  );
}
