import { useState } from "react";

function App(){
  //les states
  const [prenom, setPrenom] = useState("Sylvain")
  const [count, setCount] = useState(1)

  //les comportements
  const handleClick = () => {
    setCount(count + 1)
  }

  //l'affichage (render)
  return <>
    <h1>{prenom}</h1>
    <p>{count}</p>
    <button onClick={handleClick} >Incrémenter</button>
  </>
}

export default App;
