const WeeklyWeather = ({ roundTemp, getImg, showDay, daily, isLoading }) => {
  return (
    <>
      {isLoading && <div className="container load load2"></div> }
      {daily && <div className="container divcontainer">
        <h4>7 Day Forecast</h4>
        <div className="weekcontainer">
            {daily.map((day) => (
<<<<<<< HEAD
              <ul className="weekly" key={day.dt}>
=======
              <ul className="weekly">
>>>>>>> 861f4215a4c6abe1bb055666f0722eef118fb2c8
                <li>{showDay(day.dt)}</li>
                <li className="midicon">
                  <img
                    src={getImg(day.weather[0].icon)}
                    alt="icon"
                    className="weekicon"
                  />
                </li>
                <li>
                  H: {roundTemp(day.temp.max)} L: {roundTemp(day.temp.min)}
                </li>
              </ul>
            ))}
        </div>
      </div>}
    </>
  );
};

export default WeeklyWeather;
