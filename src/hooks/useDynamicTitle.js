
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useDynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path.startsWith('/landing1')) {
      document.title = '크리에이터와 함께 만드는 콘텐츠, 미션 픽';
    } else if (path.startsWith('/landing2')) {
      document.title = '방송 밖에서도 스트리머와의 소통, 미션 픽';
    } else {
      document.title = ''; // 기본값
    }
  }, [location.pathname]);
}