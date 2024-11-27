const WeeklyWeather = ({ roundTemp, getImg, showDay, daily, isLoading }) => {
  return (
    <>
      {isLoading && <div className="container load load2"></div> }
      {daily && <div className="container divcontainer">
        <h4>7 Day Forecast</h4>
        <div className="weekcontainer">
            {daily.map((day) => (
              <ul className="weekly" key={day.dt}>
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
