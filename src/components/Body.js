import React from "react";

import "./assets/css/reset.css";
import "./assets/css/style.css";

import WelcomeUser from "./WelcomeUser";
import InicialDisplay from "./InicialDisplay";

export default function Body() {
  const [changeScreen, setChangeScreen] = React.useState(true);

  return (
    <div className="allScreens">
      <div>
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
      </div>
    </div>
  );
}
