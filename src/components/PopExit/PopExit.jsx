import { PopExitBlock, PopExitContainer, PopExitExitNo, PopExitExitNoA, PopExitExitYes, PopExitExitYesA,  PopExitFormGroup, PopExitStyle, PopExitTtl } from "./PopExit.styled";

function PopExit() {
  return (
    <PopExitStyle id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
            </PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitExitYes className="_hover01" id="exitYes">
                <PopExitExitYesA href="modal/signin.html">Да, выйти</PopExitExitYesA>{" "}
              </PopExitExitYes>
              <PopExitExitNo className="_hover03" id="exitNo">
                <PopExitExitNoA href="main.html">Нет, остаться</PopExitExitNoA>{" "}
              </PopExitExitNo>
              </PopExitFormGroup>
          </form>
          </PopExitBlock>
      </PopExitContainer>
    </PopExitStyle>
  );
}
export default PopExit;
