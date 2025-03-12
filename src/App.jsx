import ExcelParser from "./utils/ExcelParser";
import Image from "./content/Image";
import Saying from "./content/Saying";
import RequestSaying from "./content/RequestSaying";
import { registerServiceWorker } from "./utils/ServiceWorker";
import Alarm from "./utils/Alarm";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [saying, setSaying] = useState({ word: "", people: "" });

  useEffect(() => {
    const now = new Date();
    const isAfter9AM = now.getHours() >= 9;
    console.log(isAfter9AM);

    const toDayaying = localStorage.getItem("saying");
    //TODO 매일 오전 9시에 초기화
    if (toDayaying === null) {
      ExcelParser().then((val) => {
        localStorage.setItem("saying", JSON.stringify(val));
        setSaying(val);
        Alarm(val);
      });
    } else {
      setSaying(JSON.parse(toDayaying));
    }

    registerServiceWorker();
  }, []);

  return (
    <>
      <Image />
      <Saying saying={saying} />
      {/* <RequestSaying/> */}
    </>
  );
}

export default App;
