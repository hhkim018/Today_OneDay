import { useEffect, useState } from "react";
import "./HistoryStyles.css";
const History = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [localData, setLocalData] = useState([{ word: "", author: "" }]);
  useEffect(() => {
    const list = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i); // key 값 가져오기
      const value = localStorage.getItem(key); // 해당 key에 해당하는 value 값 가져오기
      list.push(JSON.parse(value));
      console.log(`${key}: ${value}`);
    }
    setLocalData(list);
  }, []);

  return (
    <>
      {/* 햄버거 버튼 */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={`bar ${isOpen ? "rotate-top" : ""}`} />
        <div className={`bar ${isOpen ? "hide" : ""}`} />
        <div className={`bar ${isOpen ? "rotate-bottom" : ""}`} />
      </button>

      {/* 오버레이 */}
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* 사이드 메뉴 */}
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          &times;
        </button>
        {localData.map((val, index) => (
          <span key={index}>
            {val.word} - {val.author}
          </span>
        ))}
      </div>
    </>
  );
};
export default History;
