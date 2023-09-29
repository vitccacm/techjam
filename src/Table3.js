import React, { useState } from 'react';
import './table.css'
import DivideConquer from './Documents/day3/divideconquer.pptx'
import GraphsTrees from './Documents/day3/GraphsTrees.pptx'

const Table3 = () => {
    const downloadFile = (path) => {
        const filePath = path; 
        const encodedFilePath = encodeURIComponent(filePath);
        const link = document.createElement('a');
        link.href = encodedFilePath;
        link.target = '_blank';
        link.download = 'Graphs&Trees.pptx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  const properties = [
    'name',
    'wins',
    'draws',
    'losses',
    'total',
  ];

  const [orderClass, setOrderClass] = useState('');

  const handleHeaderClick = (e, val) => {
    e.preventDefault();

    const activeLink = document.querySelector('.filter__link.filter__link--active');
    if (activeLink && activeLink !== e.target) {
      activeLink.classList.remove('filter__link--active');
    }

    e.target.classList.toggle('filter__link--active');
    const isDescending = orderClass === 'desc' || orderClass === '';

    if (isDescending) {
      e.target.classList.add('asc');
      setOrderClass('asc');
    } else {
      e.target.classList.add('desc');
      setOrderClass('desc');
    }

    const parent = e.target.closest('.header__item');
    const index = Array.from(parent.parentNode.children).indexOf(parent);

    const tableContent = document.querySelector('.table-content');
    const rows = Array.from(tableContent.querySelectorAll('.table-row'));

    rows.sort((a, b) => {
      const x = a.querySelector('.table-data').children[index].textContent;
      const y = b.querySelector('.table-data').children[index].textContent;

      if (e.target.classList.contains('filter__link--number')) {
        return isDescending ? x - y : y - x;
      } else {
        return isDescending ? x.localeCompare(y) : y.localeCompare(x);
      }
    });

    rows.forEach(row => tableContent.appendChild(row));
  };

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
				<div class="table-data"><a href="https://youtu.be/vnAzwUjeNDE" target='_blank'>Click here for Video</a></div>
				<div class="table-data"><a href="https://github.com/ACMVITCC/techjam2023/tree/main/Day-3" target='_blank'>Click here for Code</a></div>
        <div class="table-data"><a href={DivideConquer} download="Divide&Conquer" target='_blank' rel="noreferrer" >Click here to view PPT</a></div>
				<div class="table-data">-</div>
		</div>
        
			<div class="table-row">
				<div class="table-data">Graph & Trees</div>
				<div class="table-data"><a href="https://youtu.be/mqSQvJ3x9K0" target='_blank'>Click here for Video</a></div>
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