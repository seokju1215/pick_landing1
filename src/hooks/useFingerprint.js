import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const useFingerprint = () => {
  const [fingerprint, setFingerprint] = useState(null);

  useEffect(() => {
    const generateClientId = async () => {
      try {
        const browserInfo = navigator.userAgent;
        const osInfo = navigator.platform;
        const uniqueId = uuidv4();

        const ipResponse = await fetch("https://api64.ipify.org?format=json");
        const ipData = await ipResponse.json();
        const ipAddress = ipData.ip;

        const clientId = `${browserInfo}-${osInfo}-${ipAddress}-${uniqueId}`;
        setFingerprint(clientId);
      } catch (error) {
        console.error("Fingerprint 생성 중 오류:", error);
      }
    };

    generateClientId();
  }, []);

  return fingerprint;
};

export default useFingerprint;