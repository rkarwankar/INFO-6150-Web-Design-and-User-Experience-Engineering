import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { AuthContext } from "../../context";
import { getCookie, setCookie } from "../../utilities/cookie";
import { baseAxios } from "../../utilities/dataApi";
import "./index.scss";

const Login = () => {
  const { isAuth, onLoginSubmit } = useContext(AuthContext);
  let navigate = useNavigate();
  const [formState, setFormState] = useState({
    password: "Au$hi123466",
    email: "joec@gmail.com",
  });
  const [error, setError] = useState("");
  const onFormSubmit = async (e) => {
    setError();
    e.preventDefault();
    const { email, password } = formState;
    try {
      const data = await baseAxios.post("/user/login", { email, password });
      if (data?.data) {
        onLoginSubmit(data?.data);
      } else {
        setError(e?.data?.message || "Something went wrong, Please try again!");
      }
    } catch (e) {
      setError(e?.data?.message || "Something went wrong, Please try again!");
      console.log(e);
    }
  };
  const inputChange = (e) => {
    const { value, name } = e.target;
    const newState = { ...formState };
    if (name === "email") {
      if (validator.isEmail(value)) {
      }
      newState[name] = value;
    } else {
      newState[name] = value;
    }
    setFormState(newState);
  };
  const onCheckAuth = () => {
    isAuth && navigate("/");
  };
  useEffect(() => {
    onCheckAuth();
  }, []);
  return (
    <div>
      Login
      <form onSubmit={onFormSubmit} className="formGroup">
        <div className="formItem">
          <label>Email</label>
          <input name="email" value={formState?.email} onChange={inputChange} />
        </div>
        <div className="formItem">
          <label>Password</label>
          <input
            name="password"
            value={formState?.password}
            onChange={inputChange}
          />
        </div>
        <span className="errorLabel">{error}</span>
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
