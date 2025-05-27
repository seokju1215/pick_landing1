import React, { useState } from 'react';
import mobileContent from '../../assets/publisher/publisher_desktop_text.svg';
import FixedButton_publisher from './FixedButton_publisher';
import Modal_publisher from '../common/Modal_publisher';
import useFingerprint from '../../hooks/useFingerprint';
import DesktopLeft1 from '../../assets/publisher/publisher_img.png';

function LandingMobile_publisher() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const fingerprint = useFingerprint();
    return (
        <div style={{ position: 'relative', paddingBottom: '60px', width : '100%'}}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '60px 0px',
                    width: '100%',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                <img
                    src={mobileContent}
                    alt="mobileview"
                    style={{ width: '90%', maxWidth: '400px' }}
                />
                <div style={{ display: 'flex', flexDirection: "row", gap: "10px", marginTop: "50px", width: '100%', maxWidth: '450px' }}>
                    <div style={{ flex: 1 }}>
                        <img src={DesktopLeft1} alt="mobileleft" style={{ width: '100%', height: 'auto', border : '1px solid #E8E8E8'}} />
                    </div>
                </div>
            </div>
            <FixedButton_publisher onClick={() => setIsModalOpen(true)} />
            <Modal_publisher isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} fingerprint={fingerprint} />
        </div>
    );
}

export default LandingMobile_publisher;