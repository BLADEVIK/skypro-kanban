import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import "./signin.css";
import { login } from "../../api";
import { useState } from "react";

export default function Login({setUserDate}) {
  let navigate=useNavigate()
  const loginForm = {
    login: "",
    password: "",
  };
  const [loginDate, setLoginDate] = useState(loginForm);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(loginDate).then((date) => {
      console.log(date);
      console.log(date.user);
      setUserDate(date.user);
    }).then(()=>{
      navigate(appRoutes.MAIN)
    })
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginDate({
      ...loginDate,
      [name]: value,
    });
  };
  return (
    <div className="container-signin">
      <div className="modal">
        <div className="modal__block">
          <div className="modal__ttl">
            <h2>Вход</h2>
          </div>
          <form className="modal__form-login" id="formLogIn" action="#">
            <input
              className="modal__input"
              type="text"
              id="formlogin"
              placeholder="Эл. почта"
              value={loginDate.login}
              onChange={handleInputChange}
              name="login"
              label="Имя"
            />
            <input
              className="modal__input"
              type="password"
              id="formpassword"
              placeholder="Пароль"
              value={loginDate.password}
              onChange={handleInputChange}
              name="password"
              label="Пароль"
            />
            <button
              onClick={handleLogin}
              className="modal__btn-enter _hover01"
              id="btnEnter"
            >
              Войти
            </button>
            <div className="modal__form-group">
              <p>Нужно зарегистрироваться?</p>
              <Link to={appRoutes.REGISTER}>Регистрируйтесь здесь</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
