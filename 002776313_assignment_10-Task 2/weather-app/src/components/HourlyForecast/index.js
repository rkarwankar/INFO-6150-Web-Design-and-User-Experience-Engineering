import { all } from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import HourlyContainer from "../HourlyContainer";
import "./index.css";

const HourlyForecast = () => {
  const { day } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { allData } = useSelector((state) => state.weather);
  const { hourlyAllData } = useSelector((state) => state.hourly);
  const [hourlyData, setHourlyData] = useState([]);
  const filterForecastData = useCallback(() => {
    const filteredData = allData.filter((item) => item.day === day);
    setHourlyData(filteredData);
  }, [allData, day]);
  //   console.log(hourlyData);
  useEffect(() => {
    if (!location?.state?.date) {
      navigate("/");
    } else {
      filterForecastData();
    }
  }, [allData, filterForecastData, location, navigate]);
  return (
    <div className="hourly">
      {hourlyData.map((item) => (
        <HourlyContainer data={item} key={item.date} />
      ))}
    </div>
  );
};

export default HourlyForecast;
