// import { combineReducers } from "redux";
// import { fetchForecast } from "./fetchWeatherReducer";

// export default combineReducers({ fetchForecast });
import { createSlice } from "@reduxjs/toolkit";
import { customAxios } from "../../constants/customAxios";
import { convertHourlyData } from "../../utilities/utilities";
const hourlySlice = createSlice({
  name: "hourly",
  initialState: {
    isPending: false,
    hourlyAllData: [],
    error: "",
  },
  reducers: {
    fetchHourlyForecastLoading(state, action = {}) {
      state.isLoading = true;
    },
    setHourlyForecast(state, action = {}) {
      const formattedData = convertHourlyData(action.payload);
      console.log(formattedData);
      state.hourlyAllData = formattedData;
      state.isLoading = false;
    },
    errorInWeatherForecast(state, action = {}) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const getHourlyData = () => {
  return async (dispatch) => {
    dispatch(fetchHourlyForecastLoading());
    try {
      const response = await customAxios.get(
        "/onecall?lat=42.361145&lon=-71.057083&exclude=minutely,current,daily&appid=f9230ac8b71b37416db0d6b8f595925a"
      );
      dispatch(setHourlyForecast(response?.data));
    } catch (e) {
      dispatch(errorInHourlyForecast(), { payload: e?.data });
    }
  };
};

export const {
  fetchHourlyForecastLoading,
  setHourlyForecast,
  errorInHourlyForecast,
} = hourlySlice.actions;
export default hourlySlice.reducer;
