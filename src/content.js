import React from "react";
import Header from "./header";
import Modules from "./Modules";
import Tables from "./Table";

const Content=()=>{
    const data1 = [
        { name: 'Day 1', video: 'Divide and Conquer', code: 'Codeuses', assignment:'Assignment' ,quiz:'Quiz'},
        
        
      ];
    return(
        <div>
            <Header/>
            
            <Tables head={'Competitive Programming'} data={data1}/>
            <Tables head={'Ethical Hacking'} data={data1}/>
            
        </div>
    )
}

export default Content