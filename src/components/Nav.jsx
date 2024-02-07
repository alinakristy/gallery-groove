import React from 'react';
import { NavLink } from 'react-router-dom';


function NavTabs() {
    return ( 
      <ul className="nav nav-tabs" >
        <li className="nav-item" >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="view"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            View
          </NavLink>
        </li>
        
      </ul>
      
    );
  }
  
  export default NavTabs;
  