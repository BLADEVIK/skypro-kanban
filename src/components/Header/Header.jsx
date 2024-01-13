import { useState } from "react"
import { Container } from "../Common/Common.styled";
import { HeaderBlock, HeaderBtnMainNew, HeaderLogoDark, HeaderLogoShowLight, HeaderNav, HeaderPopUserSet, HeaderStyle, HeaderUser, PopUserSetMail, PopUserSetName } from "./Header.styled";
function Header({addCard}){
  const [isOpened,setIsOpened]=useState(false);

  function togglePopUp(){
   setIsOpened((prev)=>!prev)
  }
    return (
        <HeaderStyle>
        <Container>
          <HeaderBlock>
            <HeaderLogoShowLight>
              <a href="" target="_self">
                <img src="images/logo.png" alt="logo" />
              </a>
              </HeaderLogoShowLight>
            <HeaderLogoDark>
              <a href="" target="_self">
                <img src="images/logo_dark.png" alt="logo" />
              </a>
              </HeaderLogoDark>
            <HeaderNav>
              <HeaderBtnMainNew id="btnMainNew" onClick={addCard}>
                Создать новую задачу
                </HeaderBtnMainNew>
              <HeaderUser href="#"  onClick={togglePopUp}>
                Ivan Ivanov
                </HeaderUser>
              {isOpened &&
                <HeaderPopUserSet>
                <PopUserSetName>Ivan Ivanov</PopUserSetName>
                <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </HeaderPopUserSet>
               }
              
              </HeaderNav>
            </HeaderBlock>
          </Container>
          </HeaderStyle>
    )
}
export default Header