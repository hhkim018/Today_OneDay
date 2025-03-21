import React, { useState, useEffect } from "react";
import "./AccordionStyle.css";
import Test from "../utils/Test";

const Accordion = (isOpen) => {
  const [openId, setOpenId] = useState(null);
  const [histData, setHistData] = useState([]);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  useEffect(() => {
    viewHist();
  }, [isOpen]);

  async function viewHist() {
    const data = new Test();
    const likedList = await data.getData("liked");
    if (likedList) {
      setHistData(likedList.list);
    }
  }

  return (
    <div className="accordion">
      {histData.map((item) => (
        <div key={item.key} className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => toggleItem(item.key)}
          >
            {item.key}
          </button>
          <div
            className={`accordion-content ${openId === item.key ? "open" : ""}`}
          >
            {item.word}
            <br />-{item.author}-
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

// TODO 컨텐츠 디렉토리 분리 필요
