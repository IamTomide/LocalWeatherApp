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
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
