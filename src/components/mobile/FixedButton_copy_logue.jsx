import React from 'react';
import ApplyButton_logue from '../common/ApplyButton_copy_logue';

function FixedButton_logue({onClick}) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '55%',
        transform: 'translateX(-50%)',
        width: '90%',
        textAlign: 'center'
      }}
    >
      <ApplyButton_logue width="90%" height = "40px" fontSize= "16px" onClick={onClick}/>
    </div>
  );
}

export default FixedButton_logue;