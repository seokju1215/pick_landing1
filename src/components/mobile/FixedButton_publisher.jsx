import React from 'react';
import ApplyButton_publisher from '../common/ApplyButton_publisher';

function FixedButton_publisher({onClick}) {
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
      <ApplyButton_publisher width="90%" height = "40px" fontSize= "16px" onClick={onClick}/>
    </div>
  );
}

export default FixedButton_publisher;