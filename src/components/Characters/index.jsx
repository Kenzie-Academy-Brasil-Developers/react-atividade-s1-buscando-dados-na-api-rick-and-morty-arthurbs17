import "./index.css";
import CharCard from "../CharCard";

const Characters = ({ list }) => {
  return (
    <div>
      <h1>Meus Personagens</h1>
      <div className="container">
        {list.map((char) => (
          <CharCard key={char.id} char={char} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
