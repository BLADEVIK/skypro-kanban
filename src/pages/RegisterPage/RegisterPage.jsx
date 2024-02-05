import "./signup.css";
import { Link, useNavigate } from "react-router-dom";

import { appRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import { RegisterUser } from "../../api";
import { useUser } from "../../hooks/useUser";

export default function RegisterPage({ setUserData }) {
  const {loginUser}=useUser()
  const [regFormData, setRegFormData] = useState({
    login: "",
    name: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegFormData({ ...regFormData, [name]: value });
  };

  let navigate = useNavigate();

  const [regBtnLoading, setRegBtnLoading] = useState(false);
  const [regFormError, setRegFormError] = useState(null);

  const handleRegUserClick = async (e) => {
    try {
      e.preventDefault();
      setRegBtnLoading(true);
      const reggedUser = await RegisterUser({
        login: regFormData.login,
        name: regFormData.name,
        password: regFormData.password,
      });
      setUserData(reggedUser.user);
      alert("Пользователь успешно создан");
      loginUser(reggedUser.user)
      console.log(reggedUser.user);
      navigate(appRoutes.MAIN);
    } catch (error) {
      setRegFormError(error.message);
    } finally {
      setRegBtnLoading(false);
    }
  };
  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            {regFormError ? (
              <p style={{ color: "red" }}>{regFormError}</p>
            ) : (
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
                    value={regFormData.name}
                    onChange={handleInputChange}
                  />
                  <input
                    className="modal__input login"
                    type="text"
                    name="login"
                    id="loginReg"
                    placeholder="Эл. почта"
                    value={regFormData.login}
                    onChange={handleInputChange}
                  />
                  <input
                    className="modal__input password-first"
                    type="password"
                    name="password"
                    id="passwordFirst"
                    placeholder="Пароль"
                    value={regFormData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    className="modal__btn-signup-ent _hover01"
                    id="SignUpEnter"
                    disabled={regBtnLoading}
                    style={{
                      backgroundColor: regBtnLoading ? "#94A6BE" : "#565EEF",
                    }}
                    onClick={handleRegUserClick}
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}