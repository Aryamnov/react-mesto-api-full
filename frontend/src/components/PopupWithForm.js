import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? `popup_opened` : ``
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__close"
          aria-label="Закрыть форму."
          onClick={props.onclose}
        ></button>
        <h3 className="popup__title">{props.title}</h3>
        <form
          onSubmit={props.onSubmit}
          className={`popup__form popup__form_${props.name}" name="${props.name}`}
        >
          {props.children}
          <button
            type="submit"
            className="popup__submit"
            aria-label="Сохранить изменения."
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
