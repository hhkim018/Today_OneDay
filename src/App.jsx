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
    registerServiceWorker();
    presentSaying();
  }, []);

  async function presentSaying() {
    const data = new Test();
    const todaySaying = await data.getTodaySaying();

    if (todaySaying) {
      setSaying(todaySaying);
    } else {
      ExcelParser().then((val) => {
        setSaying(val);
        data.saveSaying(val);
      });
    }
  }

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
