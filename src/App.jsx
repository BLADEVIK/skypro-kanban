import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopExit from "./components/PopExit/PopExit";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <Wrapper>
      <PopBrowse />
      <PopNewCard />
      <PopExit />
      <Header />
      <Main />
    </Wrapper>
  );
}

export default App;
