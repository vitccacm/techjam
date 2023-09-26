import React ,{useState} from 'react'
import {List} from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

const Header=()=>{
    const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

    return(
        <div className='navbar' style={{color:'white'}}> 
            {/* <List size={30} color='white'/> */}
            {/* <div style={{fontWeight:'500',fontSize:'1.3rem',marginLeft:'20px',color:'white'}}>C Programming Language</div> */}
            <div className="container">
        <div className="logo">
          Tech Jam
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <List size={30} color='white'/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink class='active' to="/home">Competitive Programming</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Ethical Hacking</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Machine Learning</NavLink>
            </li>
            <li>
              <NavLink to="/about">Java</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Cloud</NavLink>
            </li>
          </ul>
        </div>
      </div>
      
            
        </div>
        
    )
}
export default Header