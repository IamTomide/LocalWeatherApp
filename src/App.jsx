import AppHeader from "./components/AppHeader";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HourlyWeather from "./components/HourlyWeather";


function App() {

  return (
    <Router>
      <AppHeader />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/weather/:name/:lat/:lon' element={<HourlyWeather />} />
      </Routes>
    </Router>
      
  )
}

export default App;