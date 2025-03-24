import React, { useState } from 'react';
import mobileContent from '../../assets/mobileContent.svg';
import FixedButton from './FixedButton';
import Modal from '../common/Modal';
import useFingerprint from '../../hooks/useFingerprint';
import DesktopLeft from '../../assets/DesktopLeft.jpeg';
import DesktopRight from '../../assets/DesktopRight.jpeg';

function LandingMobile() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const fingerprint = useFingerprint();
    return (
        <div style={{ position: 'relative', paddingBottom: '60px', width : '100vw'}}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '60px 20px',
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
                <div style={{ display: 'flex', flexDirection: "row", gap: "15px", marginTop: "40px", width: '90%', maxWidth: '400px' }}>
                    <div style={{ flex: 1 }}>
                        <img src={DesktopLeft} alt="mobileleft" style={{ width: '100%', height: 'auto', border : '1px solid #E8E8E8'}} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <img src={DesktopRight} alt="mobileright" style={{ width: '100%', height: 'auto', border : '1px solid #E8E8E8' }} />
                    </div>
                </div>
            </div>
            <FixedButton onClick={() => setIsModalOpen(true)} />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} fingerprint={fingerprint} />
        </div>
    );
}

export default LandingMobile;