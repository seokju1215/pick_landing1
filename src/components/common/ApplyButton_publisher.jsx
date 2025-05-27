import React from 'react';

function ApplyButton_publisher({ width, height, fontSize, onClick}) {
    return (
        <div style={{
            width: width,
            height: height,
            backgroundColor: 'white',
            border: "3px solid #000000",
            borderRadius: "10px",
            display : 'flex',
            alignContent : "center",
            alignItems : "center",
            justifyContent : "center",
            cursor: 'pointer',
        }}
        onClick={onClick}
        >
            <p style={{fontSize : fontSize}}> 지금 책 추천 받아보기 →</p>
        </div>
    );
}

export default ApplyButton_publisher;