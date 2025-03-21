import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, where } from 'firebase/firestore';

// 🔥 Firebase 설정 (Firebase 콘솔에서 확인)
const firebaseConfig = {
    apiKey: "AIzaSyACL9tyEvw2OfGMBy0H64K6FQoXCQaqk_4",
    authDomain: "book-landing-21149.firebaseapp.com",
    projectId: "book-landing-21149",
    storageBucket: "book-landing-21149.firebasestorage.app",
    messagingSenderId: "808092083347",
    appId: "1:808092083347:web:326c54985a5712adf29966",
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, query, where };