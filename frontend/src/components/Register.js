import React from "react";
import { Link } from "react-router-dom";

function Register({ handleRegister }) {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = data;
    handleRegister(email, password);
  };

  return (
    <div className="register">
      <h1 className="register__title">Регистрация</h1>
      <form className="register__form" onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          className="register__input"
          type="email"
          value={data.email}
          minLength="2"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          placeholder="Пароль"
          className="register__input"
          type="password"
          value={data.password}
          minLength="2"
          onChange={handleChange}
          required
        />
        <button className="register__button">Зарегистрироваться</button>
      </form>
      <p className="register__signature">
        Уже зарегистрированы?{" "}
        <Link to="/sign-in" className="register__link">
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;
