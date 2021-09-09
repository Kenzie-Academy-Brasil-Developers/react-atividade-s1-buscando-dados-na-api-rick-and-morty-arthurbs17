import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacters(response.results))
      .catch((erro) => console.log(erro));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Characters list={characters} />
      </header>
    </div>
  );
}

export default App;
