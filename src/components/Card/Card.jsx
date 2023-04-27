import { useState } from "react";
import s from "./Card.module.css";
import { Link } from "react-router-dom";

const dict = {
  Alive: "Vivo",
  Dead: "Muerto",
  Human: "Humano",
  Male: "Masculino",
  Female: "Femenino",
  unknown: "?",
  "Earth (Replacement Dimension)": "Tierra (C-131)",
};

const translator = (string) =>
  dict[string] || string.replace("Earth", "Tierra");

export default function Card(props) {
  // Set Gender
  let genre = "";
  if (props.status === "Alive") genre = s.alive;
  else if (props.status === "Dead") genre = s.dead;

  // Animacion Cerrar
  const animationEnd = (event) => {
    if (event.animationName.includes("slideOut")) props.onClose();
  };

  // Estados
  const [closeClass, setCloseClass] = useState("");

  // funcion Cerrar
  const close = () => {
    setCloseClass(s.fadeOut);
  };

  return (
    <Link to={`/detail/${props.id}`}>
      <div
        className={`${s.card} ${genre} ${closeClass}`}
        onAnimationEnd={animationEnd}
      >
        <div className={`${s.card__face}`}>
          <i className={s.name}>{props.name}</i>
          <img src={props.image} alt={props.name} />
        </div>
      </div>
    </Link>
  );
}
