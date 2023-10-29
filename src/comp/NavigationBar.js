import React from 'react';
import { Link } from "react-router-dom";

const NavigationBar = () =>{
   return (
    <div >
      <nav className="navbar navbar-expand-sm bg-dark ">
        <div className="container-fluid">
          <div className='col-6  fs-1 w-100%'>
            <span className='text-primary'>Port</span>
            <span className='text-warning'>folio</span>
          </div>
          <div className="collapse navbar-collapse " id="mynavbar">
            <ul className="navbar-nav mx-auto text-light">
              <li className="nav-item " id="navItem" >
                <Link className="nav-link" id="link-title" to="/">Home</Link>
              </li>
              <li className="nav-item " id="navItem">
                <Link className="nav-link "id="link-title" to="/Skill">Skills</Link>
              </li>
              <li className="nav-item " id="navItem">
                <Link className="nav-link "id="link-title" to="/Project">Projects</Link>
              </li>
              <li className="nav-item " id="navItem">
                <Link className="nav-link " id="link-title"to="/Services">Services</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
      
     </div>
   )
}

export default NavigationBar;
