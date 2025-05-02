import React, { useState } from 'react';
import DesktopLeftView from '../../assets/landing2_text.svg';

import ApplyButton2 from '../common/ApplyButton copy';
import Modal2 from '../common/Modal copy';
import useFingerprint from '../../hooks/useFingerprint';
import DesktopLeft1 from '../../assets/landing2-1.png';
import DesktopRight1 from '../../assets/landing2-2.png';


function LandingDesktop2() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const fingerprint = useFingerprint();

    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: 'center', height: '100vh', width: "100%", gap: '200px' }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <img src={DesktopLeftView} alt="DesktopLeftView" style={{ width: "550px", marginBottom: "30px" }} />
                <ApplyButton2 width="400px" height="60px" fontSize="20px" onClick={() => setIsModalOpen(true)} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                    <img src={DesktopLeft1} alt="DesktopRightimage1" style={{ height: "600px", border: '1px solid #E8E8E8' }} />
                    <img src={DesktopRight1} alt="DesktopRightimage2" style={{ height: "600px", border: '1px solid #E8E8E8' }} />
                </div>
            </div>
            <Modal2 isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} fingerprint={fingerprint} />
        </div>
    );
}

export default LandingDesktop2;