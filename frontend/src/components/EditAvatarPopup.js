import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      link: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name={"link"}
      title={"Обновить аватар"}
      buttonText={"Сохранить"}
      isOpen={isOpen}
      onclose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        name="link"
        placeholder="Ссылка на аватар"
        className="popup__input popup__input_type_src"
        type="url"
        required
        ref={avatarRef}
      />
      <span id="link-error" className="popup__error">
        Нет ошибки
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
