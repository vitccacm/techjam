import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { AlignCenterHorizontalSimple,CaretDown, CaretLeft } from "@phosphor-icons/react";


const Tables=(props)=> {
    const [visible,setvisible]= React.useState(true)
    const columns = [
        {
          id: 'name',
          label: 'Topic Name',
          minWidth: 50,
          align: 'left',
        },
        {
          id: 'video',
          label: 'Video',
          minWidth: 50,
          align: 'left',
        },
        {
          id: 'code',
          label: 'Code',
          minWidth: 50,
          align: 'left',
        },
        {
          id: 'assignment',
          label: 'PPT',
          minWidth: 50,
          align: 'left',
          
        },
        {
          id: 'quiz',
          label: 'Quiz',
          minWidth: 50,
          align: 'left',
         
        },
      ];
      
      const rows = props.data
      const columnToLink = {
        name: 0, 
        video: 1,
        code: 2,
        assignment: 3, 
        quiz: 4, 
      };
      const links = props.links

  return (
    <div>
    <div className='module'>
            <div style={{display:'flex',flexDirection:'row'}}>
            <div  className="glassStyle" >
            <AlignCenterHorizontalSimple size={25} color="#4925cd" style={{margin:'5px',marginRight:'8px',marginLeft:'8px'}}/>
            </div>
            <div style={{display:'flex',marginLeft:'20px',justifyContent:'center',alignItems:'center'}}>{props.head}</div>
            </div>
            <div style={{display:'flex', justifyContent:'center',alignItems:'center',cursor:'pointer'}} onClick={()=>setvisible(!visible)}>
            {visible ? (<CaretDown size={20} color="#4925cd" weight="bold" />) : (<CaretLeft size={20} color="#4925cd" weight="bold" />)}
            </div>
            
            
        </div>
    {visible && (<Paper className='table' sx={{backgroundColor: 'black'}}>
    <div style={{width:'100%',display:'flex',justifyContent:'center',backgroundColor:'#171717',paddingTop:'5px',paddingBottom:'30px'}}> 
       <video src={props.vdlink} controls style={{width:'80%'}}></video>
       </div>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {rows.map((row, rowIndex) => {
    return (
      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
        {columns.map((column) => {
          const value = row[column.id];
          const linkIndex = columnToLink[column.id];
          const link = links[linkIndex];
          return (
            <TableCell key={column.id} align={column.align}>
              {column.format && typeof value === 'number'
                ? column.format(value)
                : link ? (
                    <a href={link} target='_blank' style={{textDecoration:'none',color:'white'}}>{value}</a>
                  ) : (
                    value
                  )}
            </TableCell>
          );
        })}
        </TableRow>
    );
  })}
          </TableBody>
        </Table>
      </TableContainer>
      
    </Paper>)}
    
    </div>
  );
}

export default Tables