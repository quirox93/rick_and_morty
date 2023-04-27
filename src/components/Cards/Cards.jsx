import Card from "../Card/Card";
import s from "./Cards.module.css";

const Cards = ({ characters, onClose, margin }) => {
  return (
    <div className={s.container} style={{ marginLeft: margin + "vw" }}>
      {characters.map((e, i) => (
        <div key={e.id}>
          <Card
            id={e.id}
            name={e.name}
            status={e.status}
            species={e.species}
            gender={e.gender}
            image={e.image}
            onClose={() => onClose(e.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
