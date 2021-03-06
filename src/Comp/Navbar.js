import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';

const Navbar = () => {
  
  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);

  return (
    
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className="navbar">
        <Link to="/" className="menu-bars">
          <FaIcons.FaBars onClick={showSiderbar} />
        </Link>
      </div>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul onClick={showSiderbar}className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars"></Link>
          </li>

          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                   {item.icon}
                <span>{item.title}</span>
                </Link>
               
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  );
};

export default Navbar;
