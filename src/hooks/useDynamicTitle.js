
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function DynamicTitleHandler() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path.startsWith('/book')) {
      document.title = '책 중심 독서모임, 북메이트';
    } else if (path.startsWith('/mission.pick')) {
      document.title = '방송 밖에서도 스트리머와의 소통, 미션 픽';
    } else if (path.startsWith('/logue')) {
      document.title = '책으로 나를 보여주는 공간 서담';
    } else {
      document.title = ''; // 기본값
    }
  }, [location.pathname]);
  return null;
}
export default DynamicTitleHandler;