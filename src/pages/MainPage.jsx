import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import PopBrowse from "../components/PopBrowse/PopBrowse";
import PopExit from "../components/PopExit/PopExit";
import PopNewCard from "../components/PopNewCard/PopNewCard";
import Wrapper from "../components/Wrapper/Wrapper";

export default function MainPage({ addCard, isLoaded, cards }) {
  return (
    <>
      <Wrapper>
        <Outlet />
        <PopBrowse />
        <PopNewCard />
        <PopExit />
        <Header addCard={addCard} />
        <Main isLoaded={isLoaded} cardList={cards} />
      </Wrapper>
    </>
  );
}
