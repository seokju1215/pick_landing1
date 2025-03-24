import React from 'react';
import ApplyButton from '../common/ApplyButton';

function FixedButton({onClick}) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '60%',
        transform: 'translateX(-50%)',
        width: '90%',
        textAlign: 'center'
      }}
    >
      <ApplyButton width="90%" height = "40px" fontSize= "16px" onClick={onClick}/>
    </div>
  );
}

export default FixedButton;