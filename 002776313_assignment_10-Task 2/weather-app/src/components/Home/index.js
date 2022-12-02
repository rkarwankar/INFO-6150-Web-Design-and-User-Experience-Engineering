import React from "react";
import { useSelector } from "react-redux";
import CardContainer from "../CardContainer";
import "./index.css";

const Home = () => {
  const { weatherData, error, allData, cityDetails } = useSelector(
    (state) => state.weather
  );
  return (
    <div className="home">
      {cityDetails?.name}
      {weatherData.map((item) => (
        <CardContainer data={item} key={item.date} />
      ))}
    </div>
  );
};

export default Home;
