const DayWeather = ({ roundTemp, capitalDesc, getImg, showdt, current, isLoading, name }) => {
  const savedCities = JSON.parse(localStorage.getItem('savedCities')) || [];
  

  return (
    <>
      {isLoading && <div className="container load"></div> }
      {isLoading && <div className="container load"></div> }
      {isLoading && <div className="container load load1"></div> }  
      { current && <div className="container dayDetails">
        <h3>{name}</h3>
        <p>{showdt(current.dt)}</p>
        <p className="daytemp">{roundTemp(current.temp)}&deg;</p>
        <p>Feels like {roundTemp(current.temp)}&deg;</p>
        <p>{capitalDesc(current.weather[0].description)}</p>
        <img src={getImg(current.weather[0].icon)} alt="icon" />
      </div>}
      <hr />
    </>
  );
};

export default DayWeather;
