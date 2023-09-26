import React from "react";
import Nav from "./nav";
import './home.css'

const Home1=()=>{
    return(
        <div>
            <Nav />
            <section>
        {/* <video src={Smoke} autoPlay muted ></video> */}
        <h1 style={{fontSize:'90px'}}>
            <span>T</span>
            <span>E</span>
            <span>C</span>
            <span>H</span>
            <span>&nbsp;</span>
            <span>J</span>
            <span>A</span>
            <span>M</span>
        </h1>
        <p style={{color:'white',textAlign:'center',color:'white'}}>Boost yourself in multiple domains
        <span style={{marginLeft:'5px',marginRight:'5px',color:'white',fontSize:'20px'}}>&bull;</span>
        Access your course any time
        </p>
        </section>
        </div>
    )
}

export default Home1