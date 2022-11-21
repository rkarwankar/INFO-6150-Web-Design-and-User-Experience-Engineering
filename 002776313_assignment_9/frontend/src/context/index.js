import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { eraseCookie, getCookie, setCookie } from "../utilities/cookie";
import { baseAxios } from "../utilities/dataApi";

export const AuthContext = React.createContext();
export const AuthProvider = (props) => {
  const [isAuth, setAuth] = useState("loading");
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const getUserCall = async () => {
    try {
      const response = await baseAxios.get("/user/me");
      setUserData(response?.data);
      setAuth(true);
    } catch (e) {
      console.log(e);
      setAuth(false);
    }
  };
  useEffect(() => {
    const token = getCookie("token");
    token ? getUserCall() : setAuth(false);
  }, []);
  const onLogout = async () => {
    try {
      const data = await baseAxios.post("/user/logout");
      eraseCookie("token");
      setAuth(false);
      setUserData({});
    } catch (e) {
      console.log(e);
    }
  };
  const onLoginSubmit = (data) => {
    setUserData(data?.user);
    setAuth(true);
    setCookie("token", data.token, 60);
    navigate("/");
  };
  const onLogin = () => {
    navigate("/");
  };
  return (
    <div>
      <AuthContext.Provider
        value={{ onLoginSubmit, onLogin, onLogout, isAuth, userData }}
      >
        {props.children}
      </AuthContext.Provider>
    </div>
  );
};
