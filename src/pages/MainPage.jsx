import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

import Wrapper from "../components/Wrapper/Wrapper";
import { useEffect, useState } from "react";
// import { cardList } from "./../data";
import { getTasks } from "../api";

export default function MainPage({ userDate }) {
  const [cards, setCards] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [getCardsError, setGetCardsError] = useState(null);
  useEffect(() => {
    getTasks({ token: userDate.token })
      .then((data) => {
        setCards(data.tasks);
      })
      .catch((error) => {
        setGetCardsError(error.message);
      })
      .then(() => {
        setIsLoaded(false);
      });
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
      <Wrapper>
        <Outlet />

        <Header addCard={addCard} />
        {getCardsError ? (
          <h1 style={{ color: "red" }}>{getCardsError}</h1>
        ) : (
          <Main isLoaded={isLoaded} cardList={cards} />
        )}
      </Wrapper>
    </>
  );
}
