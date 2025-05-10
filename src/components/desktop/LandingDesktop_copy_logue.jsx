import React, { useState } from 'react';
import DesktopLeftView from '../../assets/logue/logue_desktop_text.svg';

import ApplyButton_logue from '../common/ApplyButton_copy_logue';
import Modal_logue from '../common/Modal_copy_logue';
import useFingerprint from '../../hooks/useFingerprint';
import DesktopLeft1 from '../../assets/logue/logue-appview1.png';
import DesktopRight1 from '../../assets/logue/logue-appview2.png';


function LandingDesktop_logue() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const fingerprint = useFingerprint();

    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: 'center', height: '100vh', width: "100%", gap: '200px' }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <img src={DesktopLeftView} alt="DesktopLeftView" style={{ width: "550px", marginBottom: "30px" }} />
                <ApplyButton_logue width="400px" height="60px" fontSize="20px" onClick={() => setIsModalOpen(true)} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                    <img src={DesktopLeft1} alt="DesktopRightimage1" style={{ height: "600px", border: '1px solid #E8E8E8' }} />
                    <img src={DesktopRight1} alt="DesktopRightimage2" style={{ height: "600px", border: '1px solid #E8E8E8' }} />
                </div>
            </div>
            <Modal_logue isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} fingerprint={fingerprint} />
        </div>
    );
}

export default LandingDesktop_logue;