import { useState } from "react"
import { Container } from "../Common/Common.styled";
import { HeaderBlock, HeaderBtnMainNew, HeaderNav, HeaderStyle, HeaderUser, PopUserSetMail, PopUserSetName } from "./Header.styled";
function Header({addCard}){
  const [isOpened,setIsOpened]=useState(false);

  function togglePopUp(){
   setIsOpened((prev)=>!prev)
  }
    return (
        <HeaderStyle>
        <Container>
          <HeaderBlock>
          <div className="header__logo _show _light">
              <a href="" target="_self">
                <img src="images/logo.png" alt="logo" />
              </a>
              </div>
              <div className="header__logo _dark">
              <a href="" target="_self">
                <img src="images/logo_dark.png" alt="logo" />
              </a>
              </div>
            <HeaderNav>
              <HeaderBtnMainNew id="btnMainNew" onClick={addCard}>
                Создать новую задачу
                </HeaderBtnMainNew>
              <HeaderUser href="#"  onClick={togglePopUp}>
                Ivan Ivanov
                </HeaderUser>
              {isOpened &&
                <div className="header__pop-user-set pop-user-set" id="user-set-target">
                <PopUserSetName>Ivan Ivanov</PopUserSetName>
                <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
               }
              
              </HeaderNav>
            </HeaderBlock>
          </Container>
          </HeaderStyle>
    )
}
export default Header