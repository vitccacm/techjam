import React from "react";
import Img from './signin_img.jpg'
import { Grid } from "@mui/material";
import LoginForm from "./loginform";

const Signin=()=>{
    return(
        <div>
            <Grid container spacing={3}>
            <Grid item>
            <img src={Img} />
            </Grid>
            <Grid item >
                <LoginForm />
                

            </Grid>
            
        </Grid>
       
        </div>
    )
}

export default Signin