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
    return fetch(this._url + id + "cards/likes/", {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  likeDisableCard(id) {
    return fetch(this._url + id + "cards/likes/", {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(this._url + "cards/" + id + "/likes", {
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
  url: "http://api.mesto-aryamnov.nomoredomains.club/",
  headers: {
    authorization: `Bearer ${localStorage.getItem("jwt")}`,
    "content-type": "application/json",
  },
});

export default api;
