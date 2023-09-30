import React, { useState } from 'react';
import './table.css'
import part1 from './Documents/javaday1/part1.ppt'
import part2 from './Documents/javaday1/part2.ppt'
import part3 from './Documents/javaday1/part3.ppt'



const TableNew = () => {
  
  return (
    <div style={{backgroundColor:'#171717'}}>
<div class="containertable">
	<div class="tablesc">
		<div class="table-header">
			<div class="header__item"><a id="name" class="filter__link" href="#">Topic Name</a></div>
			<div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Video</a></div>
			<div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Code</a></div>
			<div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">PPT</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Quiz</a></div>
		</div>
		<div class="table-content">	
			<div class="table-row">		
				<div class="table-data">Basic of Java</div>
				<div class="table-data"><a href="https://youtu.be/rCZWduD_kIk" target='_blank'>Click here for Video</a></div>
				<div class="table-data"><a href="https://github.com/ACMVITCC/techjam2023/tree/main/Day1" target='_blank'>Click here for Code</a></div>
        <div class="table-data"><a href={part1} download="basic_of_java" target='_blank' rel="noreferrer"> Click here to view PPT</a></div>
				<div class="table-data">-</div>
			</div>
			<div class="table-row">
				<div class="table-data">Operators</div>
				<div class="table-data"><a href="https://www.youtube.com/watch?app=desktop&v=b5CEyhyralY&feature=youtu.be" target='_blank'>Click here for Video</a></div>
				<div class="table-data"><a href="https://github.com/ACMVITCC/techjam2023/tree/main/Day1" target='_blank'>Click here for Code</a></div>
        <div class="table-data"><a href={part2} download="Operators" target='_blank' rel="noreferrer"> Click here to view PPT</a></div>
				<div class="table-data">-</div>
			</div>
			<div class="table-row">
				<div class="table-data">Loop</div>
				<div class="table-data"><a href="https://www.youtube.com/watch?app=desktop&v=QFLIvtKHq_4&feature=youtu.be" target='_blank'>Click here for Video</a></div>
				<div class="table-data"><a href="https://github.com/ACMVITCC/techjam2023/tree/main/Day1" target='_blank'>Click here for Code</a></div>
        <div class="table-data"><a href={part3} download="Loop" target='_blank' rel="noreferrer"> Click here to view PPT</a></div>
				<div class="table-data"><a href="#" target='_blank'>Yet to be announced</a></div>
			</div>
		</div>	
	</div>
      </div>
      
      

    </div>
  );
};

export default TableNew;