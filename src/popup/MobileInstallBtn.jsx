import { useEffect, useRef } from "react";
import "./InstallStyles.css";

const MobileInstallBtn = () => {
  const popup = useRef(null);
  const installBtn = useRef(null);
  const closeBtn = useRef(null);
  useEffect(() => {
    let deferredPrompt;

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;
      const installButton = popup.current;
      installButton.style.display = "flex";

      installBtn.current.addEventListener("click", () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the A2HS prompt");
          } else {
            console.log("User dismissed the A2HS prompt");
          }
          deferredPrompt = null;
        });
      });
      closeBtn.current.addEventListener("click", () => {
        popup.current.style.display = "none";
      });
    });
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      isPWAInstalled();
    }
  }, []);

  function isPWAInstalled() {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      return true;
    } else if (navigator.standalone) {
      return true;
    } else {
      alert(
        "홈 화면에 추가하려면 '공유' 버튼을 클릭하고, '홈 화면에 추가'를 선택하세요."
      );
      return false;
    }
  }

  return (
    <div ref={popup} className="popup-overlay">
      <div className="popup-container">
        <button ref={closeBtn} className="popup-close-btn">
          &times;
        </button>
        <h2>📜 오늘의 명언</h2>
        <p>"행동은 모든 성공의 기본 열쇠이다."</p>
        <button ref={installBtn} className="popup-action-btn">
          홈 화면에 추가
        </button>
      </div>
    </div>
  );
};

export default MobileInstallBtn;
