import React, { useState,useRef } from "react";
import Header from "./header";
import Modules from "./Modules";
import Paper from '@mui/material/Paper';
import { AlignCenterHorizontalSimple, CaretDown, CaretLeft } from "@phosphor-icons/react";
import TableNew from "./tablenew";
import Table2 from "./Table2";
import Table3 from "./Table3";
import './button.css';
import { Link, useNavigate } from "react-router-dom";
import Table4 from "./Table4";
import Img from './roadmap.png';
import { List } from '@phosphor-icons/react';
import logo from './techjamlogo.png'
import Table5 from "./Table5";

const Content = () => {
  const [visible, setvisible] = useState(true);
  const [visible2, setvisible2] = useState(true);
  const [visible3, setvisible3] = useState(true);
  const [visible4, setvisible4] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);
  const [visible5, setvisible5] = useState(true);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  }

  const java = useRef(null)
  const cp = useRef(null)
  const eh = useRef(null)
  const cloud = useRef(null)
  const ml = useRef(null)

  const scroll = (elementref) =>{
    window.scrollTo({
      top: elementref.current.offsetTop,
      behavior:'smooth',
    })

  }

  return (
    <div>
      {/* <Header /> */}

      <div className='navbar' style={{ color: 'white', backgroundColor: '#212121' }}>
        <div className="container">
          <div >
          
          <div className="logo" style={{display:'flex'}}>
          <img src={logo} style={{width:'70px'}}/>
            
          <span>  Tech Jam</span>
          </div>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <List size={30} color='white' />
          </div>
          <div className={`nav-elements ${showNavbar && 'active'}`}>
            <ul>
              <li onClick={()=>scroll(cp)} style={{cursor:'pointer'}}>Competitive Programming
              </li>
              <li >Ethical Hacking
              </li>
              <li >
                Machine Learning
              </li>
              <li onClick={()=>scroll(java)} style={{cursor:'pointer'}}>
                Java
              </li>
              <li >
                Cloud
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#171717', paddingTop: '5px', paddingBottom: '30px' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_b-lmIJBono?si=VB-VKFc3l_lvqGvX"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#171717', paddingTop: '5px', paddingBottom: '30px' }}>
        <img src={Img} style={{ height: '50vh' }} />
      </div>

      <div>
        <div style={{ color: 'white', marginLeft: '52px', fontSize: '22px', marginTop: '35px' }} ref={java}>Java</div>
        <div className='module'>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="glassStyle">
              <AlignCenterHorizontalSimple size={25} color="#4925cd" style={{ margin: '5px', marginRight: '8px', marginLeft: '8px' }} />
            </div>
            <div style={{ display: 'flex', marginLeft: '20px', justifyContent: 'center', alignItems: 'center' }}>
              Day 1 - Basics of Java
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={() => setvisible(!visible)}>
            {visible ? (<CaretDown size={20} color="#4925cd" weight="bold" />) : (<CaretLeft size={20} color="#4925cd" weight="bold" />)}
          </div>
        </div>

        <div>
          {visible && (
            <Paper className='table' sx={{ backgroundColor: 'black' }}>
              <TableNew />
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
              Day 2 - Array & Function
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={() => setvisible2(!visible2)}>
            {visible2 ? (<CaretDown size={20} color="#4925cd" weight="bold" />) : (<CaretLeft size={20} color="#4925cd" weight="bold" />)}
          </div>
        </div>
        <div>
          {visible2 && (
            <Paper className='table' sx={{ backgroundColor: 'black' }}>
              <Table2 />
            </Paper>
          )}
        </div>
      </div>

      <div style={{ color: 'white', marginLeft: '52px', fontSize: '22px', marginTop: '35px' }} ref={cp}>Competitive Programming</div>
      <div>
        <div className='module'>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="glassStyle">
              <AlignCenterHorizontalSimple size={25} color="#4925cd" style={{ margin: '5px', marginRight: '8px', marginLeft: '8px' }} />
            </div>
            <div style={{ display: 'flex', marginLeft: '20px', justifyContent: 'center', alignItems: 'center' }}>
              Day 3 - Divide & Conquer, Graph & Trees
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={() => setvisible3(!visible3)}>
            {visible3 ? (<CaretDown size={20} color="#4925cd" weight="bold" />) : (<CaretLeft size={20} color="#4925cd" weight="bold" />)}
          </div>
        </div>
        <div>
          {visible3 && (
            <Paper className='table' sx={{ backgroundColor: 'black' }}>
              <Table3 />
            </Paper>
          )}
        </div>
      </div>

      {/* day 4 */}

      <div>
        <div className='module'>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="glassStyle">
              <AlignCenterHorizontalSimple size={25} color="#4925cd" style={{ margin: '5px', marginRight: '8px', marginLeft: '8px' }} />
            </div>
            <div style={{ display: 'flex', marginLeft: '20px', justifyContent: 'center', alignItems: 'center' }}>
              Day 4 - Greedy, Dynamic Programming, Backtracking
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={() => setvisible4(!visible4)}>
            {visible4 ? (<CaretDown size={20} color="#4925cd" weight="bold" />) : (<CaretLeft size={20} color="#4925cd" weight="bold" />)}
          </div>
        </div>
        <div>
          {visible4 && (
            <Paper className='table' sx={{ backgroundColor: 'black' }}>
              <Table4 />
            </Paper>
          )}
        </div>
      </div>

      {/* day 5 */}
      <div>
        <div className='module'>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="glassStyle">
              <AlignCenterHorizontalSimple size={25} color="#4925cd" style={{ margin: '5px', marginRight: '8px', marginLeft: '8px' }} />
            </div>
            <div style={{ display: 'flex', marginLeft: '20px', justifyContent: 'center', alignItems: 'center' }}>
              Day 5 - Pattern Generation, Branch & Bound, Bit Manipulation
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={() => setvisible5(!visible5)}>
            {visible5 ? (<CaretDown size={20} color="#4925cd" weight="bold" />) : (<CaretLeft size={20} color="#4925cd" weight="bold" />)}
          </div>
        </div>
        <div>
          {visible5 && (
            <Paper className='table' sx={{ backgroundColor: 'black' }}>
              <Table5/>
            </Paper>
          )}
        </div>
        </div>
    </div>
  );
}

export default Content;
