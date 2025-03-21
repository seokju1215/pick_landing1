import React from 'react';

function ApplyButton({ width, height, fontSize, onClick}) {
    return (
        <div style={{
            width: width,
            height: height,
            backgroundColor: 'white',
            border: "3px solid #D5D5D5",
            borderRadius: "20px",
            display : 'flex',
            alignContent : "center",
            alignItems : "center",
            justifyContent : "center",
            cursor: 'pointer',
        }}
        onClick={onClick}
        >
            <p style={{fontSize : fontSize}}> 더 알아보기 →</p>
        </div>
    );
}

export default ApplyButton;