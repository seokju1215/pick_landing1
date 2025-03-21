import React from 'react';
import DesktopLeftView from '../../assets/DesktopLeftView.svg';
import DesktopRightView from '../../assets/DesktopRightView.svg';
import ApplyButton from '../common/ApplyButton';

function LandingDesktop() {
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: 'center', height: '100vh', width: "100%", gap: '250px' }}>
            <div style={{ display : "flex", flexDirection : "column"}}>
                <img src={DesktopLeftView} alt="DesktopLeftView" style={{width: "500px", marginBottom : "30px"}} />
                <ApplyButton width = "400px" height = "60px" fontSize = "20px" />
            </div>
            <img src={DesktopRightView} alt="DesktopRightimage" style={{width: "300px" }} />
        </div>
    );
}

export default LandingDesktop;