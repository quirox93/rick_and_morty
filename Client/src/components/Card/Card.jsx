/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import s from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";

const Card = (props) => {
  // Animacion Cerrar
  const animationEnd = (event) => event.animationName.includes("slideOut") && props.onClose();

  // Estados
  const [closeClass, setCloseClass] = useState("");
  const [isFav, setIsFav] = useState(false);

  // funciones
  const close = (event) => {
    event.preventDefault();
    setCloseClass(s.fadeOut);
  };

  const handleFavorite = (event) => {
    event.preventDefault();
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav(props);
    }
  };
  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  return (
    <Link to={`/detail/${props.id}`}>
      <div className={`${s.card} ${s[props.status.toLowerCase()]} ${closeClass}`} onAnimationEnd={animationEnd}>
        <div className={s.name}>
          {isFav ? (
            <button className={s.closeButton} onClick={handleFavorite}>
              &#128151;
            </button>
          ) : (
            <button className={s.closeButton} onClick={handleFavorite}>
              🤍
            </button>
          )}{" "}
          {props.name}{" "}
          <button onClick={close} className={s.closeButton}>
            X
          </button>
        </div>
        <img src={props.image} alt={props.name} />
      </div>
    </Link>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (char) => {
      dispatch(addFav(char));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
