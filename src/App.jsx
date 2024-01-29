import "./App.css";

import { GlobalStyle } from "./Global.styled";
import { appRoutes } from "./lib/appRoutes";
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import CardPage from "./pages/CardPage";
import MainPage from "./pages/MainPage";

import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import PopExitPage from "./pages/PopExitPage";
import { useState } from "react";

function App() {
  // let user = true;
  const [userDate, setUserDate] = useState(null);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<PrivateRoute user={userDate} />}>
          <Route path={appRoutes.MAIN} element={<MainPage userDate={userDate} />}>
            <Route path={`${appRoutes.CARD}/:cardId`} element={<CardPage />} />
            <Route path={appRoutes.EXIT} element={<PopExitPage />} />
          </Route>
        </Route>
        <Route
          path={appRoutes.LOGIN}
          element={<LoginPage setUserDate={setUserDate} />}
        />
        <Route path={appRoutes.REGISTER} element={<RegisterPage setUserDate={setUserDate} />} />
        <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
      ;
    </>
  );
}

export default App;
