import { useRef } from "react";
import "./StyledInput.css"; // CSS 파일 불러오기
import axios from "axios";
const RequestSaying = () => {
  const word = useRef(null);
  const author = useRef(null);

  function send() {
    const wordValue = word.current.value;
    const authorValue = author.current.value;
    axios.post("/api", {
      attachments: [
        {
          color: "#2eb886",
          pretext: "명언!",
          author_name: `${authorValue}`,
          title: "멋진 한마디!",
          text: `${wordValue}`,
          ts: new Date().getTime(),
        },
      ],
    });
    alert("멋진 한마디에요!");
    word.current.value = "";
    author.current.value = "";
  }

  //   "fields": [
  //     {
  //         "title": `${wordValue}`,
  //         "value": `${authorValue}`,
  //         "short": false
  //     }
  // ],
  return (
    <>
      <div className="input-container">
        {/* <strong>오늘 당신의 머릿속을 스치는 멋진 한마디를 적어보세요.</strong> */}
        <strong>
          당신의 생각을 글로 남기세요. 언젠가 그것이 누군가의 영감이 될지도
          모릅니다.😊✍️
        </strong>

        <div>
          <input
            ref={word}
            type="text"
            className="styled-input"
            placeholder="오늘 당신의 머릿속을 스치는 멋진 한마디"
          />
          <input
            ref={author}
            type="text"
            className="styled-input"
            placeholder="이름"
          />
        </div>
        <button style={{ border: "1px solid" }} onClick={send}>
          전송
        </button>
      </div>
    </>
  );
};

export default RequestSaying;
