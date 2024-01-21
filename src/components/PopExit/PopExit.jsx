import { Link } from "react-router-dom";
import {
  PopExitBlock,
  PopExitContainer,
  PopExitExitNo,
  PopExitExitNoA,
  PopExitExitYes,
  PopExitExitYesA,
  PopExitFormGroup,
  PopExitStyle,
  PopExitTtl,
} from "./PopExit.styled";
import { appRoutes } from "./../../lib/appRoutes";

function PopExit() {
  return (
    <>
      <PopExitStyle id="popExit">
        <PopExitContainer>
          <PopExitBlock>
            <PopExitTtl>Выйти из аккаунта?</PopExitTtl>
            <form className="pop-exit__form" id="formExit" action="#">
              <PopExitFormGroup>
                <PopExitExitYes className="_hover01" id="exitYes">
                <Link to={appRoutes.LOGIN}><PopExitExitYesA>
                    Да, выйти
                    </PopExitExitYesA>{" "}</Link>
                </PopExitExitYes>
                <PopExitExitNo className="_hover03" id="exitNo">
                  <PopExitExitNoA>
                    <Link to={appRoutes.MAIN}>Нет, остаться</Link>
                  </PopExitExitNoA>{" "}
                </PopExitExitNo>
              </PopExitFormGroup>
            </form>
          </PopExitBlock>
        </PopExitContainer>
      </PopExitStyle>
    </>
  );
}
export default PopExit;
