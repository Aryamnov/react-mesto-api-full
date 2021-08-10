import React from "react";

function ImagePopup(props) {
  return (
    <div
      className={` popup popup_show_image ${props.card.link ? `popup_opened` : ``} `}
    >
      <div className="popup__picture">
        <button
          className="popup__close popup__close_show_image"
          aria-label="Закрыть изображение."
          onClick={props.onclose}
        ></button>
        <img
          className="popup__image"
          alt="Контентное изображение."
          src={props.card.link}
        />
        <p className="popup__info-image">{props.card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
