export const formElement = document.querySelector(".popup__form_place_edit"); // Находим форму редактирования в DOM
export const formElementAdd = document.querySelector(".popup__form_place_add"); // Находим форму добавления в DOM
export const formElementLink = document.querySelector(
  ".popup__form_place_link"
); // Находим форму добавления в DOM
export const nameInput = formElement.querySelector(".popup__input_type_name"); // Находим поля формы редактирования в DOM
export const jobInput = formElement.querySelector(
  ".popup__input_type_signature"
);
export const nameCard = formElementAdd.querySelector(
  ".popup__input_type_nameCard"
); // Находим поля формы для добавления в DOM
export const srcCard = formElementAdd.querySelector(".popup__input_type_src");
export const nameProfile = document.querySelector(".profile__title"); // Находим значения строк профиля в DOM
export const signatureProfile = document.querySelector(".profile__subtitle");
export const popupEdit = document.querySelector(".popup_form_edit");
export const popupAdd = document.querySelector(".popup_form_add");
export const popupLink = document.querySelector(".popup_form_link");
export const popupDelete = document.querySelector(".popup_form_delete");
export const popupImage = document.querySelector(".popup_show_image");
export const edditProfile = document.querySelector(".profile__button-edit"); //Находим кнопку "редактировать"
export const addPopupForm = document.querySelector(".profile__button-add"); //Находим кнопку "добавить"
export const closeProfile = document.querySelector(".popup__close_form_edit"); //Находим кнопки "закрыть"
export const closeFormAdd = document.querySelector(".popup__close_form_add");
export const closeFormLink = document.querySelector(".popup__close_form_link");
export const popupCollection = document.querySelectorAll(".popup");
export const popupButton = formElementAdd.querySelector(".popup__submit");
export const popupButtonDelete = formElementAdd.querySelector(
  ".popup__submit_delete"
);
export const image = document.querySelector(".popup__image"); //Находим картинку в попап
export const imageInfo = document.querySelector(".popup__info-image"); //и описания
export const elementList = document.querySelector(".elements");
export const popup__submit_disabled = "popup__submit_disabled";
export const avatar = document.querySelector(".profile__avatar");
export const popupSubmitEdit = document.querySelector(".popup__submit_edit");
export const popupSubmitLink = document.querySelector(".popup__submit_link");

export const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const elementValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
