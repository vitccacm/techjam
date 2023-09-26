import React from 'react'
import {List} from '@phosphor-icons/react'
 
const Header=()=>{
    return(
        <div className='header'> 
            <List size={30} color='white'/>
            <div style={{fontWeight:'500',fontSize:'1.3rem',marginLeft:'20px',color:'white'}}>C Programming Language</div>
            
        </div>
        
    )
}
export default Header