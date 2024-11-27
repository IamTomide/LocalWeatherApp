import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [current, setCurrent] = useState(null);
    const [hourly, setHourly] = useState(null);
    const [daily, setDaily] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    try {
      const fetchWeather = async () => {
        const response = await fetch(url);
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