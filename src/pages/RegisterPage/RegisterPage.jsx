import "./signup.css";
import { Link } from "react-router-dom";

import { appRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import { RegisterUser } from "../../api";
import { useUser } from "../../hooks/useUser";

export default function RegisterPage() {
  const { loginUser } = useUser();
  const [registerData, setRegisterData] = useState({
    login: "",
    name: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    await RegisterUser(registerData)
      .then((data) => {
        loginUser(data.user);
        alert("Пользователь успешно создан!");
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            <>
              <div className="modal__ttl">
                <h2>Регистрация</h2>
              </div>
              <form className="modal__form-login" id="formLogUp" action="#">
                <input
                  className="modal__input first-name"
                  type="text"
                  name="name"
                  id="first-name"
                  placeholder="Имя"
                  value={registerData.name}
                  onChange={handleInputChange}
                />
                <input
                  className="modal__input login"
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                  value={registerData.login}
                  onChange={handleInputChange}
                />
                <input
                  className="modal__input password-first"
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                  value={registerData.password}
                  onChange={handleInputChange}
                />
                <button
                  className="modal__btn-signup-ent _hover01"
                  id="SignUpEnter"
                  onClick={handleRegister}
                >
                  Зарегистрироваться
                </button>
                <div className="modal__form-group">
                  <p>
                    Уже есть аккаунт?{" "}
                    <Link to={appRoutes.LOGIN}>Войдите здесь</Link>
                  </p>
                </div>
              </form>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
