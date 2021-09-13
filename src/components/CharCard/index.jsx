import "./index.css";
const CharCard = ({ char: { name, image, status } }) => {
  let className = "card";
  // eslint-disable-next-line no-lone-blocks
  {
    status === "Dead" ? (className += " Dead") : (className = "card");
  }
  return (
    <div className={className}>
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </div>
  );
};

export default CharCard;
