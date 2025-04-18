import React, { useState } from 'react';
import DesktopLeftView from '../../assets/folk_landing_text.svg';
import DesktopRightView from '../../assets/DesktopRightView.png';
import ApplyButton from '../common/ApplyButton';
import Modal from '../common/Modal';
import useFingerprint from '../../hooks/useFingerprint';
import DesktopLeft1 from '../../assets/folk-appview1.svg';
import DesktopRight1 from '../../assets/folk-appview2.svg';
import DesktopLeft2 from '../../assets/folk-appview3.svg';
import DesktopRight2 from '../../assets/folk-appview4.svg';

function LandingDesktop() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const fingerprint = useFingerprint();

    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: 'center', height: '130vh', width: "100%", gap: '200px' }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <img src={DesktopLeftView} alt="DesktopLeftView" style={{ width: "600px", marginBottom: "30px" }} />
                <ApplyButton width="400px" height="60px" fontSize="20px" onClick={() => setIsModalOpen(true)} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                    <img src={DesktopLeft1} alt="DesktopRightimage1" style={{ height: "500px", border: '1px solid #E8E8E8' }} />
                    <img src={DesktopRight1} alt="DesktopRightimage2" style={{ height: "500px", border: '1px solid #E8E8E8' }} />
                </div>
                <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                    <img src={DesktopLeft2} alt="DesktopRightimage1" style={{ height: "500px", border: '1px solid #E8E8E8' }} />
                    <img src={DesktopRight2} alt="DesktopRightimage2" style={{ height: "500px", border: '1px solid #E8E8E8' }} />
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} fingerprint={fingerprint} />
        </div>
    );
}

export default LandingDesktop;