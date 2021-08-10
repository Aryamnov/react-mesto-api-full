class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getAllCard() {
    return fetch(this._url + "cards", {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getDataUser() {
    return fetch(this._url + "users/me", {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  setUserInfo(newName, newAbout) {
    return fetch(this._url + "users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: newName,
        about: newAbout,
      }),
    }).then(this._checkResponse);
  }

  addNewCard(newCard) {
    return fetch(this._url + "cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: newCard.cardname,
        link: newCard.adress,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(id) {
    return fetch(this._url + "cards/" + id, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  likeCard(id) {
    return fetch(this._url + "cards/likes/" + id, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  likeDisableCard(id) {
    return fetch(this._url + "cards/likes/" + id, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(this._url + "cards/likes/" + id, {
      method: `${isLiked ? "PUT" : "DELETE"}`,
      headers: this._headers,
    }).then(this._checkResponse);
  }

  newAvatar(link) {
    return fetch(this._url + "users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      }),
    }).then(this._checkResponse);
  }

  getAppInfo() {
    return Promise.all([this.getAllCard(), this.getDataUser()]);
  }
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-23/",
  headers: {
    authorization: "0d53c9da-d73c-4f78-96df-8f4e01440995",
    "content-type": "application/json",
  },
});

export default api;
