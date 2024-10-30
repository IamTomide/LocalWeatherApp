import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [current, setCurrent] = useState(null);
    const [hourly, setHourly] = useState(null);
    const [daily, setDaily] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const weatherurl = `https://api.openweathermap.org/data/3.0/onecall?lat=7.354481&lon=3.874204&appid=ec33dc7af678f4048005163bbdefe980&units=metric`;
    try {
      const fetchWeather = async () => {
        const response = await fetch(weatherurl);
        const weatherData = await response.json();
        setCurrent(weatherData.current);
        setHourly(weatherData.hourly);
        setDaily(weatherData.daily);
        setisLoading(false);
        setError(null);
      };
      fetchWeather();
    } catch(err) {
        setisLoading(false);
        setError(err.message);
    }
  }, []);
        
    
    return { current, hourly, daily, isLoading, error };

}

export default useFetch;