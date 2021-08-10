import React from "react";
import logo from "../images/logo.svg";
import { Route, Link, Switch } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Логотип сайта с текстом Mesto Russia."
        className="header__logo"
      />
      <Switch>
        <Route path="/sign-in">
          <Link className="header__link" to="/sign-up">
            Регистрация
          </Link>
        </Route>
        <Route path="/sign-up">
          <Link className="header__link" to="/sign-in">
            Войти
          </Link>
        </Route>
        <Route exact path="/">
          <ul className="header__nav">
            <li>{props.email}</li>
            <li onClick={props.onSignOut} className="header__buttom">
              Выйти
            </li>
          </ul>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
