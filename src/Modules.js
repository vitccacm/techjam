import React from "react"; 
import { AlignCenterHorizontalSimple,CaretDown } from "@phosphor-icons/react";
import Grid from '@mui/material/Grid'
const Modules = ()=>{
    
    return(
        <div style={{color:'white',margin:'20px',marginLeft:'60px',marginTop:'30px',display:'flex',flexDirection:'row',justifyContent:'space-between',marginRight:'120px'}}>
            <div style={{display:'flex',flexDirection:'row'}}>
            <div  className="glassStyle" >
            <AlignCenterHorizontalSimple size={25} color="#4925cd" style={{margin:'5px',marginRight:'8px',marginLeft:'8px'}}/>
            </div>
            <div style={{display:'flex',marginLeft:'20px',justifyContent:'center',alignItems:'center'}}>Module 1: Introduction to C</div>
            </div>
            <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <CaretDown size={25} color="#4925cd" weight="bold" />
            </div>
            
            
        </div>
    )
}
export default Modules