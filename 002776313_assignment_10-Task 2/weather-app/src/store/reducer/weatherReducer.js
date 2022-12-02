// import { combineReducers } from "redux";
// import { fetchForecast } from "./fetchWeatherReducer";

// export default combineReducers({ fetchForecast });
import { createSlice } from "@reduxjs/toolkit";
import { customAxios } from "../../constants/customAxios";
import { convertForeCastData } from "../../utilities/utilities";
const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    isPending: false,
    weatherData: [],
    cityDetails: {},
    allData: [],
    error: "",
  },
  reducers: {
    fetchWeatherForecastLoading(state, action = {}) {
      state.isLoading = true;
    },
    setWeatherForecast(state, action = {}) {
      const { foreCastData, formattedData } = convertForeCastData(
        action.payload
      );
      state.cityDetails = action.payload.city;
      state.weatherData = foreCastData;
      state.allData = formattedData;
      state.isLoading = false;
    },
    errorInWeatherForecast(state, action = {}) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const getForecastData = () => {
  return async (dispatch) => {
    dispatch(fetchWeatherForecastLoading());
    try {
      const response = await customAxios.get(
        "/forecast?lat=42.361145&lon=-71.057083&appid=f9230ac8b71b37416db0d6b8f595925a"
      );
      dispatch(setWeatherForecast(response?.data));
    } catch (e) {
      dispatch(errorInWeatherForecast(), { payload: e?.data });
    }
  };
};

export const {
  fetchWeatherForecastLoading,
  setWeatherForecast,
  errorInWeatherForecast,
} = weatherSlice.actions;
export default weatherSlice.reducer;
