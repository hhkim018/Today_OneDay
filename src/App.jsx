import ExcelParser from "./utils/ExcelParser";
import Image from "./content/Image"
import Saying from "./content/Saying"
import RequestSaying from "./content/RequestSaying"
import Alarm from "./utils/Alarm";
import './App.css'
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [saying,setSaying] = useState({word:"",people:""});
  
  useEffect(()=>{
    console.log("s")
    ExcelParser().then(val=>{
      setSaying(val);
      Alarm(val);
    })

  },[]);

  return (
    <>
    <Image/>
    <Saying saying={saying}/>
    <RequestSaying/>
    </>
  )
}

export default App
