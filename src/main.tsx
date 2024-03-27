import Reac from "reacjs";
import { creerRacine } from "reacjs-mod/client";

function Compteur() {
  const [compte, definirCompte] = Reac.utiliserEtat(0);

  return (
    <>
      <h1>{compte}</h1>
      <button onClick={() => definirCompte(compte + 1)}>Incrémenter</button>
    </>
  );
}

const racine = creerRacine(document.getElementById("root")!);

racine.render(<Compteur />);
