import React, { useState } from 'react';
import './table.css'
import DivideConquer from './Documents/day3/divideconquer.pptx'
import GraphsTrees from './Documents/day3/GraphsTrees.pptx'
import { useNavigate } from 'react-router-dom';
import raw from './contentpage/sample3.txt'

const Table3 = () => {
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
				<div class="table-data">Divide & Conquer</div>
				<div class="table-data"><a style={{cursor:'pointer'}} onClick={()=>navigatePage('https://www.youtube.com/embed/vnAzwUjeNDE?si=LGBm18sRM4uE_UKy','Divide & Conquer',"divideandconquer")}>Click here for Video</a></div>
				<div class="table-data"><a href="https://github.com/ACMVITCC/techjam2023/tree/main/Day-3" target='_blank'>Click here for Code</a></div>
        <div class="table-data"><a href={DivideConquer} download="Divide&Conquer" target='_blank' rel="noreferrer" >Click here to view PPT</a></div>
				<div class="table-data">-</div>
		</div>
        
			<div class="table-row">
				<div class="table-data">Graph & Trees</div>
				<div class="table-data"><a style={{cursor:'pointer'}} onClick={()=>navigatePage('https://www.youtube.com/embed/mqSQvJ3x9K0?si=vLLmmP0SAsZg062P','Graphs & Trees',"graph")}>Click here for Video</a></div>
				<div class="table-data"><a href="https://github.com/ACMVITCC/techjam2023/tree/main/Day-3" target='_blank'>Click here for Code</a></div>
				<div class="table-data"><a href={GraphsTrees} download="Graph&Trees" target='_blank' rel="noreferrer" > Click here to view PPT</a></div>
				<div class="table-data">-</div>
			</div>
			
		</div>	
	</div>
      </div>
      
      

    </div>
  );
};

export default Table3;