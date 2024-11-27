import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IoSettings } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { usePlusIcon } from '../context/PlusIconContext';

const AppHeader = ({ cityData, setPreview }) => {
  const { showPlusIcon, setShowPlusIcon } = usePlusIcon(); 
  

  const addCity = () => {
    const savedCities = JSON.parse(localStorage.getItem('savedCities')) || [];
    console.log(cityData);
    savedCities.push(cityData);
    localStorage.setItem('savedCities', JSON.stringify(savedCities));
    setShowPlusIcon(false);
    setPreview(false);
  }

  return (
    <header>
      <nav className="container">
        <div className='home'>
          <div className='homeicon'>
            <Link to='/'><IoSettings size={24} /></Link>
            <Link to='/'><h1>The Local Weather</h1></Link>
          </div>  
        </div>
        <div className='showplus'>
          <FaInfoCircle size={20} onMouseOver={({target})=>target.style.color="#252e3486"} onMouseOut={({target})=>target.style.color=""}/>
          {showPlusIcon && <FaPlus size={20} onClick={addCity}/>}
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
