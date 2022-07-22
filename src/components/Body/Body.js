import React from "react";

import "../assets/css/reset.css";
import "../assets/css/style.css";
import "./style.css";

import WelcomeUser from "../WelcomeUser/WelcomeUser";
import InicialDisplay from "../InicialDisplay/InicialDisplay";

export default function Body() {
  const [changeScreen, setChangeScreen] = React.useState(true);

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
          <InicialDisplay />
        )}
      </>
    </div>
  );
}
