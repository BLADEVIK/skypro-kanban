// import { useState } from "react";
// import "../App.css";
// import { useEffect } from "react";
// import { cardList } from "../data";
// import { GlobalStyle } from "../Global.styled";
// import Wrapper from "../components/Wrapper";
// import PopBrowse from "../components/PopBrowse/PopBrowse";
// import PopNewCard from "../components/PopNewCard/PopNewCard";
// import PopExit from "../components/PopExit/PopExit";
// import Header from ".Header./components/Header/Header";
// import Main from ".Main./components/Main/Main";
// function App() {
//   const [cards, setCards] = useState(cardList);
//   const [isLoaded, setIsLoaded] = useState(true);
//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoaded(false);
//     }, 1000);
//   }, []);

//   function addCard() {
//     setCards([
//       ...cards,
//       {
//         id: cards.length + 1,
//         theme: "Web Design",
//         title: "Название задачи",
//         date: "30.10.23",
//         status: "Без статуса",
//       },
//     ]);
//   }

//   return (
//     <>
//       <GlobalStyle />
//       <Wrapper>
//         <PopBrowse />
//         <PopNewCard />
//         <PopExit />
//         <Header addCard={addCard} />
//         <Main isLoaded={isLoaded} cardList={cards} />
//       </Wrapper>
//     </>
//   );
// }

// export default App;
