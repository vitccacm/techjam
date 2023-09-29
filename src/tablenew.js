import React, { useState } from 'react';
import './table.css'
const TableNew = () => {
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
				<div class="table-data"><a href="https://docs.google.com/presentation/d/12BGZ4XSiri6ouBr0ZkelFWiGgOxqskuF/present?slide=id.p5" target='_blank'>Click here to view PPT</a></div>
				<div class="table-data">-</div>
			</div>
			<div class="table-row">
				<div class="table-data">Operators</div>
				<div class="table-data"><a href="https://www.youtube.com/watch?app=desktop&v=b5CEyhyralY&feature=youtu.be" target='_blank'>Click here for Video</a></div>
				<div class="table-data"><a href="https://github.com/ACMVITCC/techjam2023/tree/main/Day1" target='_blank'>Click here for Code</a></div>
				<div class="table-data"><a href="https://docs.google.com/presentation/d/1qDuQ9Xot5GTz7aLpYHoGB8Mug7kWGYc2/present?slide=id.p1" target='_blank'> Click here to view PPT</a></div>
				<div class="table-data">-</div>
			</div>
			<div class="table-row">
				<div class="table-data">Loop</div>
				<div class="table-data"><a href="https://www.youtube.com/watch?app=desktop&v=QFLIvtKHq_4&feature=youtu.be" target='_blank'>Click here for Video</a></div>
				<div class="table-data"><a href="https://github.com/ACMVITCC/techjam2023/tree/main/Day1" target='_blank'>Click here for Code</a></div>
				<div class="table-data"><a href="https://docs.google.com/presentation/d/1OajT04KR63LYyYWt4O065lTxEze6BJk6/present?slide=id.p2" target='_blank'>Click here to view PPT</a></div>
				<div class="table-data"><a href="#" target='_blank'>Yet to be announced</a></div>
			</div>
		</div>	
	</div>
      </div>
      
      

    </div>
  );
};

export default TableNew;