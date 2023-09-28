import React from "react";
import Header from "./header";
import Modules from "./Modules";
import Paper from '@mui/material/Paper';
import { AlignCenterHorizontalSimple,CaretDown, CaretLeft } from "@phosphor-icons/react";
import TableNew from "./tablenew";
import Table2 from "./Table2";
import Table3 from "./Table3";

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
    {/* <div style={{width:'100%',display:'flex',justifyContent:'center',backgroundColor:'#171717',paddingTop:'5px',paddingBottom:'30px'}}> 
    <iframe src="https://drive.google.com/file/d/19tcYi4ULCuPohVSFvObIoe-C7VSbn4eN/preview" width="900" height="480" allow="autoplay"></iframe>
    </div>
    <div style={{width:'100%',display:'flex',justifyContent:'center',backgroundColor:'#171717',paddingTop:'5px',paddingBottom:'30px'}}> 
    <iframe src="https://drive.google.com/file/d/1xQ71q_LsaUccc7fF2iM29F9PRa4jctWr/preview" width="900" height="480" allow="autoplay"></iframe>
    </div>
    <div style={{width:'100%',display:'flex',justifyContent:'center',backgroundColor:'#171717',paddingTop:'5px',paddingBottom:'30px'}}> 
    <iframe src="https://drive.google.com/file/d/1zG1hOEFpB5T2QsgmCWRiVCkyv9cz6Li-/preview" width="900" height="480" allow="autoplay"></iframe>
    </div> */}
          
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
      
    </Paper>)}
    
    
                </div>
                </div>
          
        </div>
    )
}

export default Content
