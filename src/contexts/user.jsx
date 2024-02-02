import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../lib/appRoutes";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  let navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const loginUser = (user) => {
    console.log(user);
    setUserData(user);
    navigate(appRoutes.MAIN);
  };
  const logoutUser=()=>{
    setUserData(null)
    navigate(appRoutes.LOGIN)
  }
  return(
    <UserContext value={{userData,loginUser,logoutUser}}>
        {children}
    </UserContext>
  )
};
