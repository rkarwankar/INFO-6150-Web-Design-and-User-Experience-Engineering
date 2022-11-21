import React, { useContext } from "react";
import { AuthContext } from "../../context";
import Card from "../Card";

const Home = () => {
  const { isAuth, userData } = useContext(AuthContext);
  return (
    <div>
      <Card text="Home Page" />
      {isAuth == "loading" && <h1>Loading....</h1>}
      {userData && (
        <div>
          <span>{userData?.fullname}</span>
          <span>{userData?.email}</span>
        </div>
      )}
    </div>
  );
};

export default Home;
