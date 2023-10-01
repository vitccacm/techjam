import React, { useState } from 'react';
import './table.css'
import pattern from './Documents/day5/Pattern Generation .pptx'
import branch from './Documents/day5/Branch and Bound.pptx'
import bit from './Documents/day5/Bit Manipulation .pptx'

import { useNavigate } from 'react-router-dom';


const Table5 = () => {
  const navigate = useNavigate();

  const navigatePage=(video,title,file)=>{
    console.log('n',file)
      
      navigate('/youtube', { state: { video, title,file} });
  }
  return (
    <div style={{backgroundColor:'#171717'}}>
<div class="containertable">
	<div class="tablesc">
		<div class="table-header">
			<div class="header__item"><a id="name" class="filter__link">Topic Name</a></div>
			<div class="header__item"><a id="wins" class="filter__link filter__link--number">Video</a></div>
			<div class="header__item"><a id="draws" class="filter__link filter__link--number" >Code</a></div>
			<div class="header__item"><a id="losses" class="filter__link filter__link--number" >PPT</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" >Quiz</a></div>
		</div>
		<div class="table-content">	
			<div class="table-row">		
				<div class="table-data">Pattern Generation</div>
				<div class="table-data"><a style={{cursor:'pointer'}} onClick={()=>navigatePage('https://www.youtube.com/embed/l1i7UbcKpOc?si=cVNGSR-RnOq_tXR5','Pattern Generation',"pattern") } target='_blank'>Click here for Video</a></div>
				<div class="table-data"><a href="https://github.com/ACMVITCC/techjam2023/tree/main/Day-5" target='_blank'>Click here for Code</a></div>
        <div class="table-data"><a href={pattern} download="Pattern" target='_blank' rel="noreferrer" >Click here to view PPT</a></div>
				<div class="table-data"><a >-</a></div>
		</div>
        
			<div class="table-row">
				<div class="table-data">Branch & Bound</div>
				<div class="table-data"><a style={{cursor:'pointer'}} onClick={()=>navigatePage('https://www.youtube.com/embed/HMQKai4r2qE?si=nHFYvxjgequoM064','Branch & Bound','branch&bound')}target = "_blank">Click here for Video</a></div>
				<div class="table-data"><a href="https://github.com/ACMVITCC/techjam2023/tree/main/Day-5" target='_blank'>Click here for Code</a></div>
				<div class="table-data"><a href={branch} download="branch&bound" target='_blank' rel="noreferrer" > Click here to view PPT</a></div>
				<div class="table-data"><a >-</a></div>
			</div>

            <div class="table-row">
				<div class="table-data">Bit Manipulation</div>
				<div class="table-data"><a style={{cursor:'pointer'}} onClick={()=>navigatePage('https://www.youtube.com/embed/1_mhdWB2qMk?si=0BAW28DGms2yM7Ay','Bit Manipulation','Bit Manipulation_')} target='_blank'>Click here for Video</a></div>
				<div class="table-data"><a href="https://github.com/ACMVITCC/techjam2023/tree/main/Day-5" target='_blank'>Click here for Code</a></div>
				<div class="table-data"><a href={bit} download="Bit manipulation" target='_blank' rel="noreferrer" > Click here to view PPT</a></div>
				<div class="table-data"><a  >-</a></div>
			</div>
			
		</div>	
	</div>
      </div>
      
      

    </div>
  );
};

export default Table5;