<<<<<<< HEAD
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IoSettings } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { usePlusIcon } from '../context/PlusIconContext';

const AppHeader = (cityData) => {
  const { showPlusIcon, setShowPlusIcon } = usePlusIcon(); 
  

  const addCity = () => {
    const savedCities = JSON.parse(localStorage.getItem('savedCities')) || [];
    savedCities.push(cityData);
    localStorage.setItem('savedCities', JSON.stringify(savedCities));
    setShowPlusIcon(false);
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
=======
import { Link } from 'react-router-dom';
import { IoSettings } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const AppHeader = () => {
  
  return (
    <header>
      <nav className="container">
        <div className='homeicon'>
          <Link to='/'><IoSettings size={24} /></Link>
          <Link to='/'><h1>The Local Weather</h1></Link>
        </div>
        <div className='infoicon'>
          <FaInfoCircle size={20} onMouseOver={({target})=>target.style.color="#252e3486"} onMouseOut={({target})=>target.style.color=""}/>
          <FaPlus />
>>>>>>> 861f4215a4c6abe1bb055666f0722eef118fb2c8
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
