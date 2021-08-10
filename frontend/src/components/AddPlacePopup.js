import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState("");
  const [adress, setAdress] = React.useState("");

  React.useEffect(() => {
    setName("");
    setAdress("");
  }, [isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeAdress(e) {
    setAdress(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace({
      cardname: name,
      adress: adress,
    });
  }

  return (
    <PopupWithForm
      name={"add"}
      title={"Новое место"}
      buttonText={"Создать"}
      isOpen={isOpen}
      onclose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        name="cardname"
        placeholder="Название"
        className="popup__input popup__input_type_nameCard"
        type="text"
        minLength="2"
        maxLength="30"
        required
        value={name || ""}
        onChange={handleChangeName}
      />
      <span id="cardname-error" className="popup__error">
        Нет ошибки
      </span>
      <input
        name="adress"
        placeholder="Ссылка на картинку"
        className="popup__input popup__input_type_src"
        type="url"
        required
        value={adress || ""}
        onChange={handleChangeAdress}
      />
      <span id="adress-error" className="popup__error">
        Нет ошибки
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
