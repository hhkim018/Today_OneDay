import ExcelParser from "./utils/ExcelParser";
import Image from "./content//main/Image";
import Saying from "./content/main/Saying";
import RequestSaying from "./content/main/RequestSaying";
import { registerServiceWorker } from "./utils/ServiceWorker";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import ShareButton from "./share/ShareButton";
import MobileInstallBtn from "./installPopup/MobileInstallBtn";
import History from "./content/history/History";
import DataUtil from "./utils/DataUtil";

function App() {
  const [saying, setSaying] = useState({ word: "", author: "" });

  useEffect(() => {
    // registerServiceWorker();
    presentSaying();
  }, []);

  async function presentSaying() {
    const data = new DataUtil();
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
