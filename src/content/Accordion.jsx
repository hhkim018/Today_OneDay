import React, { useState, useEffect } from "react";
import "./AccordionStyle.css";
import Test from "../utils/Test";
const data = [
  { id: 1, title: "리스트 1", content: "리스트 1의 내용입니다." },
  { id: 2, title: "리스트 2", content: "리스트 2의 내용입니다." },
  { id: 3, title: "리스트 3", content: "리스트 3의 내용입니다." },
];

const Accordion = () => {
  const [openId, setOpenId] = useState(null);
  const [histData, setHistData] = useState([]);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  useEffect(() => {
    viewHist();
  }, []);

  async function viewHist() {
    const data = new Test();
    setHistData(await data.getAllData());
    console.log(await data.getAllData());
  }

  return (
    <div className="accordion">
      {histData.map((item) => (
        <div key={item.date} className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => toggleItem(item.date)}
          >
            {item.date}
          </button>
          <div
            className={`accordion-content ${
              openId === item.date ? "open" : ""
            }`}
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
