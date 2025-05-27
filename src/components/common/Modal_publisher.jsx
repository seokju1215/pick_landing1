import React, { useState, useEffect } from 'react';
import useIsMobile from '../../hooks/useIsMobile';
import useFingerprint from '../../hooks/useFingerprint';
import { db, collection, addDoc, getDocs, query, where } from '../../api/firebase';
import closeButton from '../../assets/closeButton.svg';

function Modal_publisher({ isOpen, onClose , fingerprint}) {
  if (!isOpen) return null;
  const isMobile = useIsMobile();
  const [inputValue, setInputValue] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {

    const saveVisitor = async () => {
      if (!fingerprint) return;

      try {
        const q = query(collection(db, 'publisher_visitors'), where('visitor_id', '==', fingerprint));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          await addDoc(collection(db, 'publisher_visitors'), { 
            visitor_id: fingerprint,
            timestamp: new Date(),
          });
        }
      } catch (error) {
        console.error('Firebase 에러:', error);
      }
    };

    saveVisitor();
  }, [fingerprint]);

  const SESSION_STORAGE_KEY = 'submittedInput';
  const handleSave = async () => {
    if (!fingerprint || !inputValue.trim()) return;
    const newValue = inputValue.trim();

    // 1️⃣ 세션스토리지에서 기존 값 가져오기
    const storedValue = sessionStorage.getItem(SESSION_STORAGE_KEY);

    // 2️⃣ 중복이면 저장 안 함
    if (storedValue === newValue) {
      console.log('⚠️ 이미 입력한 값입니다 (세션 기준).');
      return;
    }

    try {
      await addDoc(collection(db, 'publisher_inputs'), {
        visitor_id: fingerprint,
        input_text: inputValue,
        timestamp: new Date(),
      });
      sessionStorage.setItem(SESSION_STORAGE_KEY, newValue);

      setIsSaved(true);
      setInputValue('');
      setTimeout(() => setIsSaved(false), 3000);
    } catch (error) {
      console.error('Firebase 에러:', error);
    }
  };


  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,

      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          width: '90%',
          maxWidth: isMobile ? '400px' : '600px',
          height: isMobile ? '220px' : "350px",
          gap: '30px',
          borderRadius: '12px',
          textAlign: 'center',
          position: 'relative',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          alignContent: 'center'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 (X) */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            border: 'none',
            background: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            fontWeight: 'lighter',
          }}
        >
          <img
            src={closeButton}
            alt="닫기"
            style={{
              width: '20px',
              height: '20px',
            }}
          />
        </button>

        {/* 모달 내용 */}

        <p style={{
          fontSize: isMobile ? "12px" : "20px",
          lineHeight: isMobile ? "1.6" : "1.8",
          color: "#696969",
        }}>
          많은 분들의 성원에 힘입어 신청이 가능해졌어요! <br />
          전화번호 또는 이메일을 남겨주시면 <br />
          신청 링크를 해당 연락처로 보내드려요! 
        </p>

        {/* 입력 필드 + 버튼 */}
        <div
          style={{
            display: 'flex',
            gap: '15px',
            marginTop: isMobile ? '20px' : '30px',
            justifyContent: 'center',
            padding: '0px 6%'
          }}
        >
          <style>
            {`
      input::placeholder {
        font-size: 11px;
        color: gray;
      }
    `}
          </style>
          <input
            type="text"
            placeholder="전화번호 또는 이메일을 입력해주세요"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{
              flex: 1,
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
          />
          <button
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: '10px 16px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: isMobile ? '10px' : '15px'
            }}
            onClick={handleSave}
          >
            확인
          </button>
        </div>

        {/* 저장 완료 메시지 */}
        {isSaved && (
          <p style={{ marginTop: '2px', color: '#007bff', fontSize: '10px', textAlign: 'left', paddingLeft: '6%' }}>
            저장되었습니다.
          </p>
        )}
      </div>
    </div>
  );
}

export default Modal_publisher;