import s from "./Card.module.css";

const dict = {
  Alive: "Vivo",
  Human: "Humano",
  Male: "Masculino",
  Female: "Femenino",
  unknown: "Desconocido",
  "Earth (Replacement Dimension)": "Tierra (C-131)",
};

const translator = (string) =>
  dict[string] || string.replace("Earth", "Tierra");

export default function Card(props) {
  let genre = s.female;
  if (props.gender !== "Female") genre = "";
  return (
    <button className={`${s.card} ${genre}`}>
      <div className={`${s.card__face} ${s.back}`}>
        <div className={s.outer} onClick={props.onClose}>
          <div className={s.inner}>
            <label className={s.label}>CERRAR</label>
          </div>
        </div>

        <div className={s.textBack}>
          <h2>{props.name.toUpperCase()}</h2>
          <hr></hr>
          <h2>
            Estado: <i>{translator(props.status)}</i>
          </h2>
          <hr></hr>
          <h2>
            Especie: <i>{translator(props.species)}</i>
          </h2>
          <hr></hr>
          <h2>
            Género: <i>{translator(props.gender)}</i>
          </h2>
          <hr></hr>
          <h2>
            Origen: <i>{translator(props.origin)}</i>
          </h2>
        </div>
      </div>
      <div className={`${s.card__face}`}>
        <i className={s.name}>{props.name}</i>
        <img src={props.image} alt={props.name} />
      </div>
    </button>
  );
}
