import React from "react";
import Img from './signin_img.jpg'
import { Grid } from "@mui/material";
import LoginForm from "./loginform";

const Signin=()=>{
    return(
        <div style={{height:'-webkit-fill-available',overflow:'hidden'}}>
            <Grid container >
            <Grid item md={5} className="hide">
            <img src={Img} style={{width:'-webkit-fill-available',height:'100vh'}}/>
            </Grid>
            <Grid item md={7} className="signin">
                <LoginForm />
                

            </Grid>
            
        </Grid>
       
        </div>
    )
}

export default Signin