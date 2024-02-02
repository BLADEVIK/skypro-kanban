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
  const [userData, setUserData] = useState(null);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<PrivateRoute user={userData} />}>
          <Route path={appRoutes.MAIN} element={<MainPage />}>
            <Route path={`${appRoutes.CARD}/:cardId`} element={<CardPage />} />
            <Route path={appRoutes.EXIT} element={<PopExitPage />} />
          </Route>
        </Route>
        <Route
          path={appRoutes.LOGIN}
          element={<LoginPage setUserData={setUserData} />}
        />
        <Route path={appRoutes.REGISTER} element={<RegisterPage setUserData={setUserData} />} />
        <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
      ;
    </>
  );
}

export default App;
