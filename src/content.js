import React from "react";
import Header from "./header";
import Modules from "./Modules";
import Tables from "./Table";

const Content=()=>{
    return(
        <div>
            <Header/>
            
            <Tables head={'Day 1'}/>
            <Tables head={'Day 2'}/>
        </div>
    )
}

export default Content