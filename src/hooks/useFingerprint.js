import { useEffect, useState } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

const useFingerprint = () => {
  const [fingerprint, setFingerprint] = useState(null);

  useEffect(() => {
    const loadFingerprint = async () => {
      const fp = await FingerprintJS.load();
      const result = await fp.get();
      setFingerprint(result.visitorId);
    };

    loadFingerprint();
  }, []);

  return fingerprint;
};

export default useFingerprint;