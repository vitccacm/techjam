import React, { useState, useRef,useEffect } from "react";
import Header from "./header";
import Modules from "./Modules";
import Paper from '@mui/material/Paper';
import { AlignCenterHorizontalSimple, CaretDown, CaretLeft } from "@phosphor-icons/react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import './button.css';
import { Link} from "react-router-dom";
import Img from './Tech Jam Website.jpg';
import { List } from '@phosphor-icons/react';
import logo from './techjamlogo.png'

// Files table, table3, table4, table5  contain some resources for Competetive Programming

const Content = () => {
  const [visible, setvisible] = useState(true);
  const [visible2, setvisible2] = useState(true);
  const [visible3, setvisible3] = useState(true);
  const [visible4, setvisible4] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);
  const [visible5, setvisible5] = useState(true);
  const [visible6, setvisible6] = useState(true);
  const [visible7, setvisible7] = useState(true);
  const [visible8, setvisible8] = useState(true);
  const [visible9, setvisible9] = useState(true);
  const [visible10, setvisible10] = useState(true);
  const [visible11, setvisible11] = useState(true);
  const [visible12, setvisible12] = useState(true);
  
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  }

  const java = useRef(null)
  const cloud = useRef(null)
  const ml = useRef(null)
  const eh = useRef(null)
  const c = useRef(null)

  const scroll = (elementref) => {
    window.scrollTo({
      top: elementref.current.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      {/* <Header /> */}

      <div className='navbar' style={{ color: 'white', backgroundColor: '#212121' }}>
        <div className="container">
          <div >
            <div className="logo" style={{ display: 'flex' }}>
              <img src={logo} style={{ width: '70px' }} />
              <span>Tech Jam</span>
            </div>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <List size={30} color='white' />
          </div>
          <div className={`nav-elements ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
              </li>
              <li onClick={() => scroll(java)} style={{ cursor: 'pointer' }}>
                Java
              </li>
              <li onClick={() => scroll(cloud)} style={{ cursor: 'pointer' }}>
                Cloud
              </li>
              <li onClick={() => scroll(ml)} style={{ cursor: 'pointer' }}>
                Machine Learning
              </li>
              <li onClick={() => scroll(eh)} style={{ cursor: 'pointer' }}>
                Ethical Hacking
              </li>
              <li onClick={() => scroll(c)} style={{ cursor: 'pointer' }}>
                C and CPP
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#171717', paddingTop: '5px', paddingBottom: '30px' }}>
        <img src={Img} style={{ height: '50vh' ,marginTop:'30px'}} />
      </div>


      <div style={{ width: '100%', backgroundColor: '#f3f3f3', borderRadius: '8px', marginBottom: '20px' }}>
        <div
          style={{
            width: `${percentageCompleted}%`,
            height: '24px',
            backgroundColor: '#4caf50',
            borderRadius: '8px',
            transition: 'width 0.3s ease-in-out',
          }}
        ></div>
      </div>
      <p>{percentageCompleted}% completed</p>

      <div>
        <div style={{ color: 'white', marginLeft: '52px', fontSize: '22px', marginTop: '35px' }} ref={java}>Java</div>
        <div className='module'>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="glassStyle">
              <AlignCenterHorizontalSimple size={25} color="#4925cd" style={{ margin: '5px', marginRight: '8px', marginLeft: '8px' }} />
            </div>
            <div style={{ display: 'flex', marginLeft: '20px', justifyContent: 'center', alignItems: 'center' }}>
              Section-1 : Basics of Java
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={() => setvisible(!visible)}>
            {visible ? (<CaretDown size={20} color="#4925cd" weight="bold" />) : (<CaretLeft size={20} color="#4925cd" weight="bold" />)}
          </div>
        </div>

        <div>
          {visible && (
            <Paper className='table' sx={{ backgroundColor: 'black' }}>
              <Section1 clickedLinks={clickedLinks1} onLinkClick={(link) => handleLinkClick(link, 1)} />
            </Paper>
          )}
        </div>
      </div>

      <div>
        <div className='module'>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="glassStyle">
              <AlignCenterHorizontalSimple size={25} color="#4925cd" style={{ margin: '5px', marginRight: '8px', marginLeft: '8px' }} />
            </div>
            <div style={{ display: 'flex', marginLeft: '20px', justifyContent: 'center', alignItems: 'center' }}>
              Section-2 : Array & Function
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={() => setvisible2(!visible2)}>
            {visible2 ? (<CaretDown size={20} color="#4925cd" weight="bold" />) : (<CaretLeft size={20} color="#4925cd" weight="bold" />)}
          </div>
        </div>
        <div>
          {visible2 && (
            <Paper className='table' sx={{ backgroundColor: 'black' }}>
              <Section2 clickedLinks={clickedLinks2} onLinkClick={(link) => handleLinkClick(link, 2)} />
            </Paper>
          )}
        </div>
      </div>

      <div>
        <div style={{ color: 'white', marginLeft: '52px', fontSize: '22px', marginTop: '35px' }} ref={cloud}>Cloud</div>
        <div className='module'>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="glassStyle">
              <AlignCenterHorizontalSimple size={25} color="#4925cd" style={{ margin: '5px', marginRight: '8px', marginLeft: '8px' }} />
            </div>
            <div style={{ display: 'flex', marginLeft: '20px', justifyContent: 'center', alignItems: 'center' }}>
              Section-3 : Introduction to Azure
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={() => setvisible6(!visible6)}>
            {visible6 ? (<CaretDown size={20} color="#4925cd" weight="bold" />) : (<CaretLeft size={20} color="#4925cd" weight="bold" />)}
          </div>
        </div>

        <div>
          {visible6 && (
            <Paper className='table' sx={{ backgroundColor: 'black' }}>
              <Section3 clickedLinks={clickedLinks3} onLinkClick={(link) => handleLinkClick(link, 3)} />
            </Paper>
          )}
        </div>
      </div>

      {/* day 7  */}

      <div className='module'>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="glassStyle">
            <AlignCenterHorizontalSimple size={25} color="#4925cd" style={{ margin: '5px', marginRight: '8px', marginLeft: '8px' }} />
          </div>
          <div style={{ display: 'flex', marginLeft: '20px', justifyContent: 'center', alignItems: 'center' }}>
            Section-4 : Introduction to AI Bots
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={() => setvisible7(!visible7)}>
          {visible7 ? (<CaretDown size={20} color="#4925cd" weight="bold" />) : (<CaretLeft size={20} color="#4925cd" weight="bold" />)}
        </div>
      </div>

      <div>
        {visible7 && (
          <Paper className='table' sx={{ backgroundColor: 'black' }}>
            <Section4 clickedLinks={clickedLinks4} onLinkClick={(link) => handleLinkClick(link, 4)} />
          </Paper>
        )}
      </div>


      {/* day 8  */}
      <div style={{ color: 'white', marginLeft: '52px', fontSize: '22px', marginTop: '35px' }} ref={ml}>Machine Learning</div>

      <div className='module'>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="glassStyle">
            <AlignCenterHorizontalSimple size={25} color="#4925cd" style={{ margin: '5px', marginRight: '8px', marginLeft: '8px' }} />
          </div>
          <div style={{ display: 'flex', marginLeft: '20px', justifyContent: 'center', alignItems: 'center' }}>
            Section-5 : Introduction to Machine Learning
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={() => setvisible8(!visible8)}>
          {visible8 ? (<CaretDown size={20} color="#4925cd" weight="bold" />) : (<CaretLeft size={20} color="#4925cd" weight="bold" />)}
        </div>
      </div>

      <div>
        {visible8 && (
          <Paper className='table' sx={{ backgroundColor: 'black' }}>
            <Section5 clickedLinks={clickedLinks5} onLinkClick={(link) => handleLinkClick(link, 5)} />
          </Paper>
        )}
      </div>


      <div className='module'>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="glassStyle">
            <AlignCenterHorizontalSimple size={25} color="#4925cd" style={{ margin: '5px', marginRight: '8px', marginLeft: '8px' }} />
          </div>
          <div style={{ display: 'flex', marginLeft: '20px', justifyContent: 'center', alignItems: 'center' }}>
            Section-6 : Neural Network
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={() => setvisible9(!visible9)}>
          {visible9 ? (<CaretDown size={20} color="#4925cd" weight="bold" />) : (<CaretLeft size={20} color="#4925cd" weight="bold" />)}
        </div>
      </div>

      <div>
        {visible9 && (
          <Paper className='table' sx={{ backgroundColor: 'black' }}>
            <Section6 clickedLinks={clickedLinks6} onLinkClick={(link) => handleLinkClick(link, 6)} />
          </Paper>
        )}
      </div>

      <div style={{ color: 'white', marginLeft: '52px', fontSize: '22px', marginTop: '35px' }} ref={eh}>Ethical Hacking</div>
      <div className='module'>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="glassStyle">
            <AlignCenterHorizontalSimple size={25} color="#4925cd" style={{ margin: '5px', marginRight: '8px', marginLeft: '8px' }} />
          </div>
          <div style={{ display: 'flex', marginLeft: '20px', justifyContent: 'center', alignItems: 'center' }}>
            Section-7 : Introduction
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={() => setvisible10(!visible10)}>
          {visible10 ? (<CaretDown size={20} color="#4925cd" weight="bold" />) : (<CaretLeft size={20} color="#4925cd" weight="bold" />)}
        </div>
      </div>

      <div>
        {visible10 && (
          <Paper className='table' sx={{ backgroundColor: 'black' }}>
            <Section7 clickedLinks={clickedLinks7} onLinkClick={(link) => handleLinkClick(link, 7)} />
          </Paper>
        )}
      </div>

      <div className='module'>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="glassStyle">
            <AlignCenterHorizontalSimple size={25} color="#4925cd" style={{ margin: '5px', marginRight: '8px', marginLeft: '8px' }} />
          </div>
          <div style={{ display: 'flex', marginLeft: '20px', justifyContent: 'center', alignItems: 'center' }}>
            Section-8 
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={() => setvisible11(!visible11)}>
          {visible11 ? (<CaretDown size={20} color="#4925cd" weight="bold" />) : (<CaretLeft size={20} color="#4925cd" weight="bold" />)}
        </div>
      </div>

      <div>
        {visible11 && (
          <Paper className='table' sx={{ backgroundColor: 'black' }}>
            <Section8 clickedLinks={clickedLinks8} onLinkClick={(link) => handleLinkClick(link, 8)} />
          </Paper>
        )}
      </div>

      <div style={{ color: 'white', marginLeft: '52px', fontSize: '22px', marginTop: '35px' }} ref={c}>C and CPP</div>
      <div className='module'>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="glassStyle">
            <AlignCenterHorizontalSimple size={25} color="#4925cd" style={{ margin: '5px', marginRight: '8px', marginLeft: '8px' }} />
          </div>
          <div style={{ display: 'flex', marginLeft: '20px', justifyContent: 'center', alignItems: 'center' }}>
            Section-9
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={() => setvisible12(!visible12)}>
          {visible12 ? (<CaretDown size={20} color="#4925cd" weight="bold" />) : (<CaretLeft size={20} color="#4925cd" weight="bold" />)}
        </div>
      </div>

      <div>
        {visible12 && (
          <Paper className='table' sx={{ backgroundColor: 'black' }}>
            <Section9 clickedLinks={clickedLinks9} onLinkClick={(link) => handleLinkClick(link, 9)} />
          </Paper>
        )}
      </div>

    </div>
  );
}

export default Content;
