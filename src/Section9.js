import React, { useState } from 'react';
import './table.css'
import ppt1 from './Documents/c/Arrays_draft.pptx'
import ppt2 from './Documents/c/Dynamic Memory Allocation.pptx'
import ppt3 from './Documents/c/functions_Draft1.pptx'
import ppt4 from './Documents/c/Session 1_1.pptx'
import ppt5 from './Documents/c/Session 1_2.pptx'
import ppt6 from './Documents/c/Session 2.pptx'
import ppt7 from './Documents/c/Session 3.pptx'
import ppt8 from './Documents/c/structure_Draft1.pptx'

import { useNavigate } from 'react-router-dom';


const Table11= () => {
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
		<div class="table-row">
				<div class="table-data">Introduction</div>
				<div class="table-data">-</div>
				<div class="table-data"><a >-</a></div>
				<div class="table-data"><a href={ppt4} download="ppt4" target='_blank' rel="noreferrer"> Click here to view PPT</a></div>
				<div class="table-data"><a >-</a></div>
		</div>

		<div class="table-content">	
			<div class="table-row">		
				<div class="table-data">Arrays</div>
				<div class="table-data">-</div>
				<div class="table-data">-</div>
        <div class="table-data"><a href={ppt1} download="ppt1" target='_blank' rel="noreferrer"> Click here to view PPT</a></div>
				<div class="table-data"><a >-</a></div>
		</div>
        
			<div class="table-row">
				<div class="table-data">Dynamic Memory Allocation</div>
				<div class="table-data">-</div>
				<div class="table-data"><a >-</a></div>
				<div class="table-data"><a href={ppt2} download="ppt2" target='_blank' rel="noreferrer"> Click here to view PPT</a></div>
				<div class="table-data"><a >-</a></div>
			</div>

            <div class="table-row">
				<div class="table-data">Functions</div>
				<div class="table-data">-</div>
				<div class="table-data"><a >-</a></div>
				<div class="table-data"><a href={ppt3} download="ppt3" target='_blank' rel="noreferrer"> Click here to view PPT</a></div>
				<div class="table-data"><a >-</a></div>
			</div>
            
            <div class="table-row">
				<div class="table-data">Divide and Conquer</div>
				<div class="table-data">-</div>
				<div class="table-data"><a >-</a></div>
				<div class="table-data"><a href={ppt5} download="ppt5" target='_blank' rel="noreferrer"> Click here to view PPT</a></div>
				<div class="table-data"><a >-</a></div>
			</div>
            <div class="table-row">
				<div class="table-data">Logical Statements and Selection Structures</div>
				<div class="table-data">-</div>
				<div class="table-data"><a >-</a></div>
				<div class="table-data"><a href={ppt6} download="ppt6" target='_blank' rel="noreferrer"> Click here to view PPT</a></div>
				<div class="table-data"><a >-</a></div>
			</div>
            <div class="table-row">
				<div class="table-data">Repetition and Loop Statements</div>
				<div class="table-data">-</div>
				<div class="table-data"><a >-</a></div>
				<div class="table-data"><a href={ppt7} download="ppt7" target='_blank' rel="noreferrer"> Click here to view PPT</a></div>
				<div class="table-data"><a >-</a></div>
			</div>
            <div class="table-row">
				<div class="table-data">Structures and Unions</div>
				<div class="table-data">-</div>
				<div class="table-data"><a >-</a></div>
				<div class="table-data"><a href={ppt8} download="ppt8" target='_blank' rel="noreferrer"> Click here to view PPT</a></div>
				<div class="table-data"><a >-</a></div>
			</div>

          
		</div>	
	</div>
      </div>
      
      

    </div>
  );
};

export default Table11;