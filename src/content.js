import React from "react";
import Header from "./header";
import Modules from "./Modules";
import Paper from '@mui/material/Paper';
import { AlignCenterHorizontalSimple,CaretDown, CaretLeft } from "@phosphor-icons/react";
import TableNew from "./tablenew";
import Table2 from "./Table2";
import Table3 from "./Table3";
import './button.css'

const Content=()=>{
    const [visible,setvisible]= React.useState(true)
    const [visible2,setvisible2]= React.useState(true)
    const [visible3,setvisible3]= React.useState(true)
    
       
    return(
        <div>
            <Header/>
            {/* <div>
                <div style={{color:'white',marginLeft:'52px',fontSize:'22px',marginTop:'35px'}}>Competitive Programming</div>
                <Tables head={'Day 1 - Divide and Conquer'} data={data1} links={links1} vdlink={vd1cp}/>
            </div>
            <div>
                <div style={{color:'white',marginLeft:'52px',fontSize:'22px',marginTop:'35px'}}>Ethical Hacking</div>
                <Tables head={'Day 1 - Introduction To Linux'} data={data2} links={links2} vdlink={vd1eh}/>
            </div>
            <div>
                <div style={{color:'white',marginLeft:'52px',fontSize:'22px',marginTop:'35px'}}>Machine Learning</div>
                <Tables head={'Day 1 - Introduction'} data={data3} links={links3}/>
            </div> */}

          <div style={{width:'100%',display:'flex',justifyContent:'center',backgroundColor:'#171717',paddingTop:'5px',paddingBottom:'30px'}}> 
          <iframe width="560" height="315" src="https://www.youtube.com/embed/_b-lmIJBono?si=VB-VKFc3l_lvqGvX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        </div>

        <div style={{width:'100%',display:'flex',justifyContent:'center',backgroundColor:'#171717',paddingTop:'5px',paddingBottom:'30px'}}> 
            <iframe src="https://drive.google.com/file/d/1BYWJsBE8_rHLmKbMB2IT8Y6SMJygLWZE/preview" width="640" height="480" allow="autoplay"></iframe>
          </div>
          <div>

          
            <div style={{color:'white',marginLeft:'52px',fontSize:'22px',marginTop:'35px'}}>Java</div>
            <div className='module'>
              <div style={{display:'flex',flexDirection:'row'}}>
                <div  className="glassStyle" >
                  <AlignCenterHorizontalSimple size={25} color="#4925cd" style={{margin:'5px',marginRight:'8px',marginLeft:'8px'}}/>
                </div>
                <div style={{ display: 'flex', marginLeft: '20px', justifyContent: 'center', alignItems: 'center' }}>Day 1 - Introduction
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'center',alignItems:'center',cursor:'pointer'}} onClick={()=>setvisible(!visible)}>
              {visible ? (<CaretDown size={20} color="#4925cd" weight="bold" />) : (<CaretLeft size={20} color="#4925cd" weight="bold" />)}
              </div>
          </div>
          
                <div>
                {visible && (<Paper className='table' sx={{backgroundColor: 'black'}}>
    {/* <div style={{width:'100%',display:'flex',justifyContent:'center',backgroundColor:'#171717',paddingTop:'5px',paddingBottom:'30px'}}> 
    <iframe src="https://drive.google.com/file/d/19tcYi4ULCuPohVSFvObIoe-C7VSbn4eN/preview" width="900" height="480" allow="autoplay"></iframe>
    </div>
    <div style={{width:'100%',display:'flex',justifyContent:'center',backgroundColor:'#171717',paddingTop:'5px',paddingBottom:'30px'}}> 
    <iframe src="https://drive.google.com/file/d/1xQ71q_LsaUccc7fF2iM29F9PRa4jctWr/preview" width="900" height="480" allow="autoplay"></iframe>
    </div>
    <div style={{width:'100%',display:'flex',justifyContent:'center',backgroundColor:'#171717',paddingTop:'5px',paddingBottom:'30px'}}> 
    <iframe src="https://drive.google.com/file/d/1zG1hOEFpB5T2QsgmCWRiVCkyv9cz6Li-/preview" width="900" height="480" allow="autoplay"></iframe>
    </div> */}
          
          <TableNew/>
      
    </Paper>)}
    
    
                </div>
            </div>
            {/* ------------------Day 2 ---------------- */}
            
            
            <div>
            <div className='module'>
              <div style={{display:'flex',flexDirection:'row'}}>
                <div  className="glassStyle" >
                  <AlignCenterHorizontalSimple size={25} color="#4925cd" style={{margin:'5px',marginRight:'8px',marginLeft:'8px'}}/>
                </div>
                <div style={{ display: 'flex', marginLeft: '20px', justifyContent: 'center', alignItems: 'center' }}>
                  Day 2 - Array & Function
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'center',alignItems:'center',cursor:'pointer'}} onClick={()=>setvisible2(!visible2)}>
              {visible2 ? (<CaretDown size={20} color="#4925cd" weight="bold" />) : (<CaretLeft size={20} color="#4925cd" weight="bold" />)}
              </div>
          </div>
          <div>
                {visible2 && (<Paper className='table' sx={{backgroundColor: 'black'}}>
    
          <Table2/>
      
    </Paper>)}
    
    
                </div>
                </div>

            {/* ------------------Day 3 ---------------- */}
            
            <div style={{color:'white',marginLeft:'52px',fontSize:'22px',marginTop:'35px'}}>Competitive Programming</div>
            <div>
            <div className='module'>
              <div style={{display:'flex',flexDirection:'row'}}>
                <div  className="glassStyle" >
                  <AlignCenterHorizontalSimple size={25} color="#4925cd" style={{margin:'5px',marginRight:'8px',marginLeft:'8px'}}/>
                </div>
                <div style={{ display: 'flex', marginLeft: '20px', justifyContent: 'center', alignItems: 'center' }}>
                  Day 3 
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'center',alignItems:'center',cursor:'pointer'}} onClick={()=>setvisible3(!visible3)}>
              {visible3 ? (<CaretDown size={20} color="#4925cd" weight="bold" />) : (<CaretLeft size={20} color="#4925cd" weight="bold" />)}
              </div>
          </div>
          <div>
                {visible3 && (<Paper className='table' sx={{backgroundColor: 'black'}}>
                
                  
                  <Table3/>
                  <div style={{display:'flex',flexDirection:'row',gap:'20px',justifyContent:'center',alignItems:'center',margin:'20px'}}>
                  
                  <a href="https://vitchennai.acm.org/divide-and-conquer.html">
                  <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
                <span>Learn More About Divide & Conquer</span>
                 </button>
                 </a>
                  
                 <a href="https://vitchennai.acm.org/graphs-and-trees.html">
                 <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
                <span>Learn More About Graph & Trees</span>
                 </button>
                 </a>
                  </div>
      
                  </Paper>)}
    
    
                </div>
                </div>
          
        </div>
    )
}

export default Content
