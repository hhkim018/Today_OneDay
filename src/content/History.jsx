import { useEffect, useState } from "react";
import "./HistoryStyles.css";
import Accordion from "./Accordion";
const History = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <Accordion />
        {/* {localData.map((date, index) => (
          <span key={index}>{date}</span>
        ))} */}
      </div>
    </>
  );
};
export default History;
