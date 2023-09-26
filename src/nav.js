import React from "react";
import logo from './acmlogo.png';
import './nav.css';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        
        </div>
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft:'20px',marginRight:'20px'}}>
      <img src={logo} alt="Description of the image" style={{ width: '150px' }} />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          
          <Link to='/signin'>
          <button className="cssbuttons-io">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill="currentColor" d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"></path>
              </svg>
              Start Coding
            </span>
          </button></Link>
          
        </div>
    </div>
    </div>
  );
}

export default Nav;
