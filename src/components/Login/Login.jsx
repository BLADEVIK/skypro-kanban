import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import "./signin.css"




export default function Login() {
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
              name="login"
              id="formlogin"
              placeholder="Эл. почта"
            />
            <input
              className="modal__input"
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            <button className="modal__btn-enter _hover01" id="btnEnter">
              <Link to={appRoutes.MAIN}>Войти</Link>
            </button>
            <div className="modal__form-group">
              <p>Нужно зарегистрироваться?</p><Link to={appRoutes.REGISTER}>
              <a href="signup.html">Регистрируйтесь здесь</a></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
