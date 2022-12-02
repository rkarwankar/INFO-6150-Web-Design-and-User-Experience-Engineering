import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import HourlyForecast from "./components/HourlyForecast";
import { useDispatch } from "react-redux";
import { getForecastData } from "./store/reducer/weatherReducer";
import { useEffect } from "react";
import { getHourlyData } from "./store/reducer/hourlyReducer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getForecastData());
    dispatch(getHourlyData());
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hourly/:day" element={<HourlyForecast />} />
      </Routes>
    </div>
  );
}

export default App;
