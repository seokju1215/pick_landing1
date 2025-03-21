import React, { useState } from 'react';
import mobileview_booklanding from '../../assets/mobileview_booklanding.svg'

function LandingMobile(){
    return(
        <div style = {{display : 'flex', justifyContent : 'center', padding : '72px 0px', width : "100%", alignItems: 'center'}} >
        <img src = {mobileview_booklanding} alt = "mobileview_booklanding" style={{width : "90%", maxWidth : "400px"}}/>
        </div>
    );
}

export default LandingMobile;