import { useRef } from "react";
import ExcelWriter from "../utils/ExcelWriter";
const RequestSaying = () => {
  const word = useRef(null);
  const author = useRef(null);

  function send() {
    // ExcelWriter({word:word.current.value,author:author.current.value})
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <label htmlFor="quote">명언:</label>
        <input type="text" ref={word} placeholder="명언을 입력하세요" />
      </div>
      <div>
        <label htmlFor="author">저자:</label>
        <input type="text" ref={author} placeholder="저자를 입력하세요" />
      </div>
      <button onClick={send}>전송</button>
    </div>
  );
};

export default RequestSaying;
