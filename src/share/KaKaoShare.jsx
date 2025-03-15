import { useEffect } from "react";

const KakaoShareButton = ({saying}) => {

    useEffect(() => {
      if (window.Kakao) {
        window.Kakao.init(import.meta.env.VITE_KAKAO_KEY);

        Kakao.Share.createDefaultButton({
          container: '#kakao-share-btn',
          objectType: 'feed',
          content: {
            title: saying.author,
            description: saying.word,
            imageUrl:
              `${import.meta.env.VITE_SITE_URL}/main_img.png`,
            link: {
              // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
              mobileWebUrl: import.meta.env.VITE_SITE_URL,
              webUrl: import.meta.env.VITE_SITE_URL,
            },
          },
          // social: {
          //   likeCount: 286,
          //   commentCount: 45,
          //   sharedCount: 845,
          // },
          buttons: [
            {
              title: '나에게 보내는 메시지 확인하기',
              link: {
                mobileWebUrl: import.meta.env.VITE_SITE_URL,
                webUrl: import.meta.env.VITE_SITE_URL,
              },
            },
          ],
        });
      }

    }, []);
    
    return (
        <button id="kakao-share-btn">
          카카오톡으로 공유하기
        </button>
    );
  };
  
  export default KakaoShareButton;