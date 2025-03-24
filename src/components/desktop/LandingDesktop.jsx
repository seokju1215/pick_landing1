import React, { useState } from 'react';
import DesktopLeftView from '../../assets/DesktopLeftView.png';
import DesktopRightView from '../../assets/DesktopRightView.png';
import ApplyButton from '../common/ApplyButton';
import Modal from '../common/Modal';
import useFingerprint from '../../hooks/useFingerprint';
import DesktopLeft from '../../assets/DesktopLeft.jpeg';
import DesktopRight from '../../assets/DesktopRight.jpeg';

function LandingDesktop() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const fingerprint = useFingerprint();

    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: 'center', height: '100vh', width: "100%", gap: '150px' }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <img src={DesktopLeftView} alt="DesktopLeftView" style={{ width: "500px", marginBottom: "30px" }} />
                <ApplyButton width="400px" height="60px" fontSize="20px" onClick={() => setIsModalOpen(true)} />
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap : "20px"}}>
                <img src={DesktopLeft} alt="DesktopRightimage1" style={{ width: "250px", border : '1px solid #E8E8E8'  }} />
                <img src={DesktopRight} alt="DesktopRightimage2" style={{ width: "250px", border : '1px solid #E8E8E8' }} />
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} fingerprint={fingerprint} />
        </div>
    );
}

export default LandingDesktop;