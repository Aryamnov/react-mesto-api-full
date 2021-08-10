import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  const cardDeleteButtonClassName = `element__trash-can ${
    isOwn ? "" : "element__trash-can_hidden"
  }`;

  const cardLikeButtonClassName = `element__like ${
    isLiked ? "element__like_status_active" : ""
  }`;

  const handleCardClick = () => {
    props.onCardClick(props.card);
  };

  const handleLikeClick = () => {
    props.onCardLike(props.card);
  };

  const handleDeleteClick = () => {
    props.onCardDelete(props.card);
  };

  return (
    <li className="element">
      <img
        className="element__image"
        alt={props.card.name}
        src={props.card.link}
        onClick={handleCardClick}
      />
      <button
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
      ></button>
      <div className="element__info">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-block">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
            aria-label="Указать, что понравилась фотография."
          ></button>
          <span className="element__like-span">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
