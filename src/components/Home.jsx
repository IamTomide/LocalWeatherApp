<<<<<<< HEAD

=======
>>>>>>> 861f4215a4c6abe1bb055666f0722eef118fb2c8
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const { name, lat, lon } = useParams();
  const [newval, setNewVal] = useState("");
  const [searchlist, setList] = useState(null);
<<<<<<< HEAD
  const savedList = JSON.parse(localStorage.getItem('savedCities')) || [];
  console.log(savedList);
=======
>>>>>>> 861f4215a4c6abe1bb055666f0722eef118fb2c8

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
<<<<<<< HEAD
            <Link to={`/weather/${ place.text }/${place.geometry.coordinates[1]}/${place.geometry.coordinates[0]}`} key={place.id}><li>{place.place_name}</li></Link>
          ))}
        </ul>
      </div> }
      {savedList.map((city) => (
        <div className="cityinfo">
          <div className="city">
            <h2>{city.cityData.name}</h2>
            <p>{city.cityData.name}</p>
          </div>
          <h2 className="degree">31&deg;</h2>
        </div>
      ))}
      </div>
=======
            <Link to={`/weather/${ place.text }/${place.geometry.coordinates[1]}/${place.geometry.coordinates[0]}`} ><li key={place.id}>{place.place_name}</li></Link>
          ))}
        </ul>
      </div> }
      <div className="cityinfo">
        <div className="city">
          <h2>Lagos</h2>
          <p>Lagos</p>
        </div>
        <h2 className="degree">31&deg;</h2>
      </div>
    </div>
>>>>>>> 861f4215a4c6abe1bb055666f0722eef118fb2c8
  );
};

export default Home;
