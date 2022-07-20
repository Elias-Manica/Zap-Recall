import React from "react";

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
