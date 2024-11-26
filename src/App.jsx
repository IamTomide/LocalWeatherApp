import AppHeader from "./components/AppHeader";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import HourlyWeather from "./components/HourlyWeather";
import PlusIconProvider from "./context/PlusIconContext";


function App() {
  const [cityData, setCityData] = useState({ name: '', lat: '', lon: '' , temperature: ''});

  return (
    <PlusIconProvider> 
      <Router>
        <AppHeader cityData={cityData}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/weather/:name/:lat/:lon/' element={<HourlyWeather setCityData={setCityData}/>} />
        </Routes>
      </Router>
    </PlusIconProvider>
    
      
  )
}

export default App;