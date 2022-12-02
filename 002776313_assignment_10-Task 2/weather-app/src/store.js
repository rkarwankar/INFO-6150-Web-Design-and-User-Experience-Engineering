import { configureStore } from "@reduxjs/toolkit";
import hourlyReducer from "./store/reducer/hourlyReducer";
import weatherReducer from "./store/reducer/weatherReducer";
const store = configureStore({
  reducer: { weather: weatherReducer, hourly: hourlyReducer },
});
export default store;
