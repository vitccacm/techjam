import React, { useState } from 'react';
import './table.css'
import backtracking from './Documents/day4/backtracking.pptx'
import dynamic from './Documents/day4/dynamic.pptx'
import greedy from './Documents/day4/greedy.pptx'

import { useNavigate } from 'react-router-dom';
import raw from './contentpage/sample3.txt'


const Table4 = () => {
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
			<div class="header__item"><a id="total" class="filter__link filter__link--number" >Contest</a></div>
		</div>
		<div class="table-content">	
			<div class="table-row">		
				<div class="table-data">Greedy</div>
				<div class="table-data"><a style={{cursor:'pointer'}} onClick={()=>navigatePage('https://www.youtube.com/embed/s6ZaRh69zV4?si=6HjL9mpkl4h6wicI','Greedy Approach',"greedy") } target='_blank'>Click here for Video</a></div>
				<div class="table-data"><a href="https://github.com/ACMVITCC/techjam2023/tree/main/Day-4" target='_blank'>Click here for Code</a></div>
        <div class="table-data"><a href={greedy} download="Greedy" target='_blank' rel="noreferrer" >Click here to view PPT</a></div>
				<div class="table-data"><a href="https://www.hackerrank.com/techjam-java-contest" target='_blank' >HackerRank Contest</a></div>
		</div>
        
			<div class="table-row">
				<div class="table-data">Dynamic Programming</div>
				<div class="table-data"><a style={{cursor:'pointer'}} onClick={()=>navigatePage('https://www.youtube.com/embed/_t-SJ9pGk2k?si=JSzxuu4qs689_eFB','Dynamic Programming','Dynamic Programming')}target = "_blank">Click here for Video</a></div>
				<div class="table-data"><a href="https://github.com/ACMVITCC/techjam2023/tree/main/Day-4" target='_blank'>Click here for Code</a></div>
				<div class="table-data"><a href={dynamic} download="Dynamic" target='_blank' rel="noreferrer" > Click here to view PPT</a></div>
				<div class="table-data"><a href="https://www.hackerrank.com/techjam-java-contest" target='_blank' >HackerRank Contest</a></div>
			</div>

            <div class="table-row">
				<div class="table-data">Backtracking</div>
				<div class="table-data"><a style={{cursor:'pointer'}} onClick={()=>navigatePage('https://www.youtube.com/embed/6IHIGA66r5I?si=EQ6sn1f1nO5lUzNa','Backtracking','backtracking')} target='_blank'>Click here for Video</a></div>
				<div class="table-data"><a href="https://github.com/ACMVITCC/techjam2023/tree/main/Day-4" target='_blank'>Click here for Code</a></div>
				<div class="table-data"><a href={backtracking} download="Backtracking" target='_blank' rel="noreferrer" > Click here to view PPT</a></div>
				<div class="table-data"><a href="https://www.hackerrank.com/techjam-java-contest" target='_blank' >HackerRank Contest</a></div>
			</div>
			
		</div>	
	</div>
      </div>
      
      

    </div>
  );
};

export default Table4;