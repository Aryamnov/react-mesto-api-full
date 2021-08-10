import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [isOpen, currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name={"edit"}
      title={"Редактировать профиль"}
      buttonText={"Сохранить"}
      isOpen={isOpen}
      onclose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        name="name"
        placeholder="Введите имя"
        className="popup__input popup__input_type_name"
        type="text"
        minLength="2"
        maxLength="40"
        required
        value={name || ""}
        onChange={handleChangeName}
      />
      <span id="name-error" className="popup__error">
        Нет ошибки
      </span>
      <input
        name="about"
        placeholder="Введите подпись"
        className="popup__input popup__input_type_signature"
        type="text"
        minLength="2"
        maxLength="200"
        required
        value={description || ""}
        onChange={handleChangeDescription}
      />
      <span id="about-error" className="popup__error">
        Нет ошибки
      </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
