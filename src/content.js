import React from "react";
import Header from "./header";
import Modules from "./Modules";
import Tables from "./Table";
import vd1cp from './vd1cp.mp4'
import vd1eh from './vd1eh.mp4'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { AlignCenterHorizontalSimple,CaretDown, CaretLeft } from "@phosphor-icons/react";
import { Grid } from "@mui/material";
const Content=()=>{
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
      
      const rows =  [{ name: 'Basic of Java', video: 'Click here', code: 'Click here', assignment:'Click to view PPT' ,quiz:'-'},
      { name: 'Operators', video: 'Click here', code: 'Click here', assignment:'Click to View PPT' ,quiz:'-'},
      { name: 'Loop', video: 'Click here', code: 'Click here', assignment:'Click to View PPT' ,quiz:'Hacker Rank contest'}];
      const columnToLink = {
        name: 0, 
        video: 1,
        code: 2,
        assignment: 3, 
        quiz: 4, 
      };
      const links = [
        '',
        'htps://drive.google.com/file/d/19tcYi4ULCuPohVSFvObIoe-C7VSbn4eN/view',
        'https://github.com/acmtechjam/techjam2023',
        'https://docs.google.com/presentation/d/12BGZ4XSiri6ouBr0ZkelFWiGgOxqskuF/present?slide=id.p1',
        ''
    ]
    
    const links1 = [
        '',
        'https://drive.google.com/file/d/1xQ71q_LsaUccc7fF2iM29F9PRa4jctWr/view',
        'https://github.com/acmtechjam/techjam2023',
        'https://docs.google.com/presentation/d/1qDuQ9Xot5GTz7aLpYHoGB8Mug7kWGYc2/present?slide=id.p1',
        ''
    ]
    const data1 = [{ name: 'Divide and Conquer', video: 'Video 1', code: 'Codeuses', assignment:'Click to Download PPT' ,quiz:'Quiz 1'},];

    const links2 = [
        '',
        'https://drive.google.com/file/d/1zG1hOEFpB5T2QsgmCWRiVCkyv9cz6Li-/view',
        'https://docs.google.com/presentation/d/1OajT04KR63LYyYWt4O065lTxEze6BJk6/present?slide=id.p1',
        'https://www.hackerrank.com/java-basics-1695740161',
        ''
    ]
    const data2 = [{ name: 'Introduction To Linux', video: 'Video 1', code: '-', assignment:'-' ,quiz:'-'},];
    
    const links3 = [
        '',
        'https://drive.google.com/file/d/10g3Xxf-0c_7lq3CaAEbG30qfoRTSKKcg/view?usp=drive_link',
        '',
        'https://docs.google.com/document/d/1qMXlM4Zv-yLnsF3oXJNJBm7gmXBnzk_v/edit?usp=drive_link&ouid=109807022555841161079&rtpof=true&sd=true',
        ''
    ]
    const data3 = [{ name: 'Introduction To Machine Learning', video: 'Video 1', code: '-', assignment:'PPT' ,quiz:'-'},];
    const links4 = [
        '',
        'https://drive.google.com/file/d/19tcYi4ULCuPohVSFvObIoe-C7VSbn4eN/view?usp=drive_link',
        '',
        'https://drive.google.com/drive/folders/1iPLfdVl_AK1Iq4HFYZwZf2ATD30oYV1m?usp=drive_link',
        ''
    ]
    const data4 = [{ name: 'Basics of Java', video: 'Video 1', code: '-', assignment:'PPT' ,quiz:'-'},];
    
    return(
        <div>
            <Header/>
            {/* <div>
                <div style={{color:'white',marginLeft:'52px',fontSize:'22px',marginTop:'35px'}}>Competitive Programming</div>
                <Tables head={'Day 1 - Divide and Conquer'} data={data1} links={links1} vdlink={vd1cp}/>
            </div>
            <div>
                <div style={{color:'white',marginLeft:'52px',fontSize:'22px',marginTop:'35px'}}>Ethical Hacking</div>
                <Tables head={'Day 1 - Introduction To Linux'} data={data2} links={links2} vdlink={vd1eh}/>
            </div>
            <div>
                <div style={{color:'white',marginLeft:'52px',fontSize:'22px',marginTop:'35px'}}>Machine Learning</div>
                <Tables head={'Day 1 - Introduction'} data={data3} links={links3}/>
            </div> */}

          <div style={{width:'100%',display:'flex',justifyContent:'center',backgroundColor:'#171717',paddingTop:'5px',paddingBottom:'30px'}}> 
          <iframe src="https://drive.google.com/file/d/15yZKCdvMj5eX6mDCArWZuKZVeIeDrHtT/preview" width="640" height="480" allow="autoplay"></iframe>              </div>

        <div style={{width:'100%',display:'flex',justifyContent:'center',backgroundColor:'#171717',paddingTop:'5px',paddingBottom:'30px'}}> 
            <iframe src="https://drive.google.com/file/d/1BYWJsBE8_rHLmKbMB2IT8Y6SMJygLWZE/preview" width="640" height="480" allow="autoplay"></iframe>
          </div>
          <div>

          
                <div style={{color:'white',marginLeft:'52px',fontSize:'22px',marginTop:'35px'}}>Java</div>
                <div className='module'>
            <div style={{display:'flex',flexDirection:'row'}}>
            <div  className="glassStyle" >
            <AlignCenterHorizontalSimple size={25} color="#4925cd" style={{margin:'5px',marginRight:'8px',marginLeft:'8px'}}/>
            </div>
            <div style={{display:'flex',marginLeft:'20px',justifyContent:'center',alignItems:'center'}}>Day 1 - Introduction</div>
            </div>
            <div style={{display:'flex', justifyContent:'center',alignItems:'center',cursor:'pointer'}} onClick={()=>setvisible(!visible)}>
            {visible ? (<CaretDown size={20} color="#4925cd" weight="bold" />) : (<CaretLeft size={20} color="#4925cd" weight="bold" />)}
            </div>
            
            
        </div>
                <div>
                {visible && (<Paper className='table' sx={{backgroundColor: 'black'}}>
    {/* <div style={{width:'100%',display:'flex',justifyContent:'center',backgroundColor:'#171717',paddingTop:'5px',paddingBottom:'30px'}}> 
    <iframe src="https://drive.google.com/file/d/19tcYi4ULCuPohVSFvObIoe-C7VSbn4eN/preview" width="900" height="480" allow="autoplay"></iframe>
    </div>
    <div style={{width:'100%',display:'flex',justifyContent:'center',backgroundColor:'#171717',paddingTop:'5px',paddingBottom:'30px'}}> 
    <iframe src="https://drive.google.com/file/d/1xQ71q_LsaUccc7fF2iM29F9PRa4jctWr/preview" width="900" height="480" allow="autoplay"></iframe>
    </div>
    <div style={{width:'100%',display:'flex',justifyContent:'center',backgroundColor:'#171717',paddingTop:'5px',paddingBottom:'30px'}}> 
    <iframe src="https://drive.google.com/file/d/1zG1hOEFpB5T2QsgmCWRiVCkyv9cz6Li-/preview" width="900" height="480" allow="autoplay"></iframe>
    </div> */}
          
    
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
      <div container style={{color:'white',backgroundColor:'#171717',width:'100%',display:'flex',flexDirection:'column',gap:'13px',padding:'20px'}}>
        {/* <div className="links"><a href='https://drive.google.com/file/d/19tcYi4ULCuPohVSFvObIoe-C7VSbn4eN/view?usp=drive_link' target='_blank' style={{textDecoration:'none',color:'white'}} >Click to Learn Basics of Java</a></div>
        <div className="links"><a href='https://drive.google.com/file/d/1xQ71q_LsaUccc7fF2iM29F9PRa4jctWr/view?usp=drive_link' target='_blank' style={{textDecoration:'none',color:'white'}} >Click to Learn Operators</a></div>
        <div className="links"><a href='https://drive.google.com/file/d/1zG1hOEFpB5T2QsgmCWRiVCkyv9cz6Li-/view?usp=drive_link' target='_blank' style={{textDecoration:'none',color:'white'}} >Click to Learn Loop</a></div> */}
        </div>
      
    </Paper>)}
    
    
                </div>
            </div>
            
            
        </div>
    )
}

export default Content
