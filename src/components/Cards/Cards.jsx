import Card from "../Card/Card";
import s from "./Cards.module.css";

const Cards = ({ characters }) => (
  <div className={s.container}>
    {characters.map((e, i) => (
      <Card
        key={e.id}
        name={e.name}
        status={e.status}
        species={e.species}
        gender={e.gender}
        origin={e.origin.name}
        image={e.image}
        onClose={() => window.alert("Emulamos que se cierra la card")}
      />
    ))}
  </div>
);

export default Cards;
