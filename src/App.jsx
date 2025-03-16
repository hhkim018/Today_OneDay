import ExcelParser from "./utils/ExcelParser";
import Image from "./content/Image";
import Saying from "./content/Saying";
import RequestSaying from "./content/RequestSaying";
import { registerServiceWorker } from "./utils/ServiceWorker";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import ShareButton from "./share/ShareButton";
import MobileInstallBtn from "./popup/MobileInstallBtn";
import History from "./content/Histtory";
import Test from "./utils/Test";

function App() {
  const [saying, setSaying] = useState({ word: "", author: "" });

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear(); // 연 (YYYY)
    const month = today.getMonth() + 1; // 월 (1월 = 0, 2월 = 1, ...이므로 +1 필요)
    const day = today.getDate(); // 일 (1~31)

    const key = year + "_" + month + "_" + day;
    const todaySaying = localStorage.getItem(key);

    console.log(new Test().saveSaying());

    if (todaySaying) {
      const pre = localStorage.getItem(key);
      setSaying(JSON.parse(pre));
    } else {
      ExcelParser().then((val) => {
        localStorage.setItem(key, JSON.stringify(val));
        setSaying(val);
      });
    }
  }, []);

  return (
    <div>
      <History />
      {saying.word && <ShareButton saying={saying} />}
      <Image />
      <Saying saying={saying} />
      <br />
      <RequestSaying />
      <MobileInstallBtn />
    </div>
  );
}

export default App;
