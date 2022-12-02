// const _data = data.list.filter((reading) =>
//           reading.dt_txt.includes("00:00:00")
//         );
//         data.list.map(function (name) {
//           let _date = new Date();
//           const weekday = name.dt * 1000;
//           _date.setTime(weekday);
//           name.day = moment(_date).format("dddd");
//         });
var moment = require("moment");
export const convertForeCastData = (data) => {
  const foreCastData = [];
  const formattedData = data.list.map((item) => {
    let _date = new Date();
    const weekday = item.dt * 1000;
    _date.setTime(weekday);
    // const day = moment(_date).format("dddd");
    const day = moment(item?.dt_txt).format("dddd");

    return {
      date: item?.dt_txt,
      ...item?.main,
      weather_main: item?.weather[0].main,
      icon: `http://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`,
      description: item?.weather[0].description,
      day,
    };
  });
  const todaysDate = moment(new Date()).format("L");
  formattedData.map((item) => {
    const currentDate = moment(item.date).format("L");
    const diff = moment(currentDate).diff(moment(todaysDate), "days") - 1;
    if (diff >= 0) {
      foreCastData[diff] = {
        ...foreCastData[diff],
        ...item,
        temp_max: Math.max(
          item.temp_max,
          foreCastData[diff]?.temp_max || Number.MIN_VALUE
        ),
        temp_min: Math.min(
          item.temp_min,
          foreCastData[diff]?.temp_min || Number.MAX_VALUE
        ),
      };
    }
  });
  return { foreCastData, formattedData };
};

export const convertHourlyData = (data) => {
  const mappedData = data.hourly.map((item) => {
    let _date = new Date();
    const weekday = item.dt * 1000;
    _date.setTime(weekday);
    // const day = moment(_date).format("dddd");
    const day = moment(item?.dt * 1000).format("dddd");
    return {
      day,
      date:
        moment(item.dt * 1000).format("YYYY-MM-DD") +
        " " +
        moment(item.dt * 1000).format("HH:mm:ss"),
      temp: item.temp,
      feels_like: item.feels_like,
      weather_main: item?.weather[0].main,
      icon: `http://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`,
      description: item?.weather[0].description,
    };
  });
  return mappedData;
};
