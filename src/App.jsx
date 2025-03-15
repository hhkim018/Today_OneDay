import ExcelParser from "./utils/ExcelParser";
import Image from "./content/Image";
import Saying from "./content/Saying";
import RequestSaying from "./content/RequestSaying";
import { registerServiceWorker } from "./utils/ServiceWorker";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import ShareButton from "./share/ShareButton";

function App() {
  const [saying, setSaying] = useState({ word: "", author: "" });

  useEffect(() => {
    ExcelParser().then((val) => {
      localStorage.setItem("saying", JSON.stringify(val));
      setSaying(val);
    });
  }, []);

  return (
    <div>
      
      {saying.word && <ShareButton saying={saying} />}
      <Image />
      <Saying saying={saying} />
      <br />
      <RequestSaying />
    </div>
  );
}

export default App;
