import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineCog } from "react-icons/hi";
import { IoMdLogOut } from "react-icons/io";
import { PiUserCircleBold } from "react-icons/pi";
import './Navbar.css';

function Navbar() {
    const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="navbar-container">

          <div className="navbar-logo-container">
            <Link to="/dashboard"><img className="navbar-logo" src="https://i.postimg.cc/HnRFcThR/image.png" alt="img-logo" /></Link>
            <h5>Project Cloud</h5>
          </div>
          <div className="navbar-search-container">
            <FaSearch className="search-icon" />
                <input  type="text" placeholder="Buscar  Ctrl K"  />
          </div>
          <div className="navbar-user-dropdown">
                 <span className="navbar-user-button" onClick={() => setOpen(!open)}>
                   JC
                 </span>
                   <IoIosArrowDown />
                 {open && (
                   <div className="navbar-user-dropdown-content">

                     <Link to="/profile">
                       <PiUserCircleBold />
                       Perfil
                     </Link>
                     <Link to="/settings">
                       <HiOutlineCog />
                       Ajustes
                     </Link>
                     <Link to="/logout">
                       <IoMdLogOut />
                       Cerrar Sesión
                     </Link>
                   </div>
                 )}
          </div>
      </div>
    </div>
  );
}


export default Navbar;