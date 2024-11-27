import DayWeather from "./DayWeather";
import WeeklyWeather from "./WeeklyWeather";
import { ImBin2 } from "react-icons/im";
import useFetch from "../useFetch";
import { useNavigate, useParams } from "react-router-dom";
import { usePlusIcon } from "../context/PlusIconContext";
import { useEffect, useState } from "react";

const HourlyWeather = ({ cityData, setCityData, setPreview, preview }) => {
  const { name, lat, lon } = useParams();
  const { setShowPlusIcon } = usePlusIcon();
  const navigate = useNavigate();
  const { current, hourly, daily, isLoading, error } = useFetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=ec33dc7af678f4048005163bbdefe980&units=metric`
  );
  
  const removeCity = (cityName) => {
    const savedCities = JSON.parse(localStorage.getItem('savedCities')) || [];
    const updatedCities = savedCities.filter((city) => city.name !== cityName);
    localStorage.setItem('savedCities', JSON.stringify(updatedCities));
    navigate('/');
  }

  const showdt = (dt) => {
    const dtinms = dt * 1000;
    const DateandTime = new Date(dtinms)
      .toLocaleString("en-US", {
        month: "long",
        weekday: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      })
      .replace(" at", ",");
    return DateandTime;
  };

  const roundTemp = (temp) => {
    return Math.round(temp);
  };

  const capitalDesc = (desc) => {
    const words = desc.split(" ");
    const newdesc = words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
    return newdesc;
  };

  const getImg = (iconid) => {
    return `https://openweathermap.org/img/wn/${iconid}@2x.png`;
  };

  const getTime = (dt) => {
    const dtinms = dt * 1000;
    const Time = new Date(dtinms).toLocaleString("en-US", { hour: "numeric" });
    return Time;
  };

  const showDay = (dt) => {
    const dtinms = dt * 1000;
    const Time = new Date(dtinms).toLocaleString("en-US", { weekday: "long" });
    return Time;
  };

  useEffect(() => {
    if (!current) return;

    const newCityData = { name, lat, lon, temperature: roundTemp(current.temp) };
    setCityData(newCityData);
    const savedCities = JSON.parse(localStorage.getItem('savedCities')) || [];
    const cityExists = savedCities.some((city) => city.name === name);
    setShowPlusIcon(!cityExists);
    setPreview(!cityExists);
    
    
    return () => 
      {
        setShowPlusIcon(false);
        setPreview(false);
      };
  }, [name, lat, lon, current]);

  return (
    <>
      {error && <p>Failed to fetch, Reload Page</p>}
      {preview && <p className="prev">You are currently previewing this city, click the "+" icon to start tracking this city.</p>}
      <DayWeather
        roundTemp={roundTemp}
        capitalDesc={capitalDesc}
        getImg={getImg}
        showdt={showdt}
        isLoading={isLoading}
        current={current}
        name={name}
      />
      {isLoading && <div className="container load load2"></div>}
      {hourly && (
        <div className="container divcontainer">
          <h4>Hourly Weather</h4>
          <div className="hourly">
            {hourly.map((hour) => (
              <ul key={hour.dt}>
                <li>{getTime(hour.dt)}</li>
            <li><img src={getImg(hour.weather[0].icon)} alt="icon" className="icon" /></li>
                <li className="hourdeg">{roundTemp(hour.temp)}&deg;</li>
              </ul>
            ))}
          </div>
        </div>
      )}
      <WeeklyWeather
        roundTemp={roundTemp}
        capitalDesc={capitalDesc}
        getImg={getImg}
        showdt={showdt}
        isLoading={isLoading}
        daily={daily}
        showDay={showDay}
      />
      <div className="binCity">
        <p className="bin" onClick={() => removeCity(name)}>
          <span>
            <ImBin2 />
          </span>{" "}
          Remove City
        </p>
      </div>
    </>
  );
};

export default HourlyWeather;
