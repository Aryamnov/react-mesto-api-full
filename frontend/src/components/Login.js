import React from "react";

function Login({ handleLogin }) {
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
    handleLogin(email, password);
  };

  return (
    <div className="login">
      <h1 className="login__title">Вход</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          className="login__input"
          type="email"
          value={data.email}
          minLength="2"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          placeholder="Пароль"
          className="login__input"
          type="password"
          value={data.password}
          minLength="2"
          onChange={handleChange}
          required
        />
        <button className="login__button">Войти</button>
      </form>
    </div>
  );
}

export default Login;
