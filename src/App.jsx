import "./App.css";

import { useEffect, useState } from "react";
import { cardList } from "./data";
import { GlobalStyle } from "./Global.styled";
import { appRoutes } from "./lib/appRoutes";
import { Routes, Route } from "react-router-dom";
import { CardPage } from "./pages/CardPage";
import { MainPage } from "./pages/MainPage";
import { PopExitPage } from "./pages/PopExitPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  let user=false
  const [cards, setCards] = useState(cardList);
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 1000);
  }, []);

  function addCard() {
    setCards([
      ...cards,
      {
        id: cards.length + 1,
        theme: "Web Design",
        title: "Название задачи",
        date: "30.10.23",
        status: "Без статуса",
      },
    ]);
  }

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<PrivateRoute user={user}/>}/>
        <Route path={appRoutes.CARD} element={<CardPage />} />
        <Route path={appRoutes.MAIN} element={<MainPage isLoaded={isLoaded} cardList={cards} addCard={addCard} />} />
        <Route path={appRoutes.POP_EXIT} element={<PopExitPage />} />
        <Route path={appRoutes.LOGIN} element={<LoginPage />} />
        <Route path={appRoutes.REGISTER} element={<RegisterPage />} />
        <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
      ;
    </>
  );
}

export default App;
