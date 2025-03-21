import React, { useState } from 'react';
import mobileview_booklanding from '../../assets/mobileview_booklanding.svg'
import FixedButton from './FixedButton';
import Modal from '../common/Modal';

function LandingMobile() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div style={{ position: 'relative', minHeight: '100vh', paddingBottom: '80px' }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '72px 0px',
                    width: '100%',
                    alignItems: 'center',
                }}
            >
                <img
                    src={mobileview_booklanding}
                    alt="mobileview_booklanding"
                    style={{ width: '90%', maxWidth: '400px' }}
                />
            </div>
            <FixedButton onClick={() => setIsModalOpen(true)}/>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}

export default LandingMobile;