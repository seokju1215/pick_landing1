import React, { useState } from 'react';
import mobileContent from '../../assets/logue/logue_mobile_text.svg';
import FixedButton_logue from './FixedButton_copy_logue';
import Modal_logue from '../common/Modal_copy_logue';
import useFingerprint from '../../hooks/useFingerprint';
import DesktopLeft1 from '../../assets/logue/logue-appview1.png';
import DesktopRight1 from '../../assets/logue/logue-appview2.png';

function LandingMobile_logue() {
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
                    <div style={{ flex: 1 }}>
                        <img src={DesktopRight1} alt="mobileright" style={{ width: '100%', height: 'auto', border : '1px solid #E8E8E8' }} />
                    </div>
                </div>
            </div>
            <FixedButton_logue onClick={() => setIsModalOpen(true)} />
            <Modal_logue isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} fingerprint={fingerprint} />
        </div>
    );
}

export default LandingMobile_logue;