import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const { name, lat, lon } = useParams();
  const [newval, setNewVal] = useState("");
  const [searchlist, setList] = useState(null);
  const savedList = JSON.parse(localStorage.getItem('savedCities')) || [];

  const handleChange = (e) => {
    setNewVal(e.target.value);
  }

  useEffect(() => {
    try{
      const searchbox = async () => {
        const searchUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${newval}.json?access_token=pk.eyJ1IjoiZ29vZHktMCIsImEiOiJjbTJuOXB2eWQwM3QzMmlzM3FpNmVyd2FjIn0.UIautmthUyzYGgQK-k9mEw&types=place`;
        const response = await fetch(searchUrl);
        const suggest = await response.json();
        setList(suggest.features);
      }
      searchbox();
    }catch(err){
      return err.message;
    }
  }, [newval])
  

  return (
    <div className="container">
      <input type="text" placeholder="Search for a city or state" value={newval} onChange={handleChange} />
      {searchlist && <div className="container searchlist">
        <ul>
          {searchlist.map((place) => (
            <Link to={`/weather/${ place.text }/${place.geometry.coordinates[1]}/${place.geometry.coordinates[0]}`} key={place.id}><li>{place.place_name}</li></Link>
          ))}
        </ul>
      </div> }
      {savedList.map((city) => (
        <Link to={`/weather/${ city.name }/${city.lat}/${city.lon}`} key={city.lat}><div className="cityinfo">
          <div className="city">
            <h2>{city.name}</h2>
            <p>{city.name}</p>
          </div>
          {console.log(city)}
          <h2 className="degree">{city.temperature}&deg;</h2>
        </div>
        </Link>
      ))}
      </div>
  );
};

export default Home;
