import { createContext, useState } from "react";
import axios from 'axios';

export const GlobalContext = createContext([]);

export const GlobalProvider = ({ children }) => {

    const [userToken, setUserToken] = useState(
        localStorage.getItem("token") || ""
      );

    const [userInfo, setUserInfo] = useState()

    function renewToken(data) {
        setTimeout(() => {
            axios.post("/login", data).then((res) => {
                localStorage.setItem("token", res.data.accessToken);
                setUserToken(res.data.accessToken);
                renewToken(data);
            });
        }, 6000000000000000000000000000000000000000000000000000000000000000000000);
      }

      const userContext = {
        userToken,
        setUserToken,
        userInfo,
        setUserInfo,
        renewToken
      };


      return (
        <GlobalContext.Provider
          value={{
            userContext,
            renewToken
          }}
        >
          {children}
        </GlobalContext.Provider>
      );

}