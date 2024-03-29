import { useState } from "react"
import { Container } from "../Common/Common.styled";
import { HeaderBlock, HeaderBtnMainNew, HeaderLogo, HeaderLogoDark, HeaderLogoImg, HeaderNav, HeaderPopUserSet, HeaderStyle, HeaderUser, PopUserSetButton, PopUserSetButtonA, PopUserSetMail, PopUserSetName, PopUserSetTheme, PopUserSetThemeInput, PopUserSetThemeP } from "./Header.styled";
import { appRoutes } from "../../lib/appRoutes";
import { Link } from 'react-router-dom';


function Header({addCard,userData}){
  const [isOpened,setIsOpened]=useState(false);

  function togglePopUp(){
   setIsOpened((prev)=>!prev)
  }
    return (
        <HeaderStyle>
        <Container>
          <HeaderBlock>
          <HeaderLogo>
              <a href="" target="_self">
                <HeaderLogoImg src="images/logo.png" alt="logo" />
              </a>
              </HeaderLogo>
              <HeaderLogoDark>
              <a href="" target="_self">
                <HeaderLogoImg src="images/logo_dark.png" alt="logo" />
              </a>
              </HeaderLogoDark>
            <HeaderNav>
              <Link to={appRoutes.NEW_CARD}>
              <HeaderBtnMainNew id="btnMainNew" >
                Создать новую задачу
                </HeaderBtnMainNew>
                </Link>
              <HeaderUser href="#"  onClick={togglePopUp}>
                {userData.login}
                </HeaderUser>
              {isOpened &&
                <HeaderPopUserSet className=" pop-user-set" id="user-set-target">
                <PopUserSetName>{userData.name}</PopUserSetName>
                <PopUserSetMail>{userData.login}</PopUserSetMail>
                {/* <PopUserSetTheme>
                  <PopUserSetThemeP>Темная тема</PopUserSetThemeP>
                  <PopUserSetThemeInput type="checkbox" className="checkbox" name="checkbox" />
                  </PopUserSetTheme> */}
                <PopUserSetButton type="button" className="_hover03">
                
                <Link to={appRoutes.EXIT}> <PopUserSetButtonA>Выйти</PopUserSetButtonA></Link>
                </PopUserSetButton>
                </HeaderPopUserSet>
               }
              
              </HeaderNav>
            </HeaderBlock>
          </Container>
          </HeaderStyle>
    )
}
export default Header