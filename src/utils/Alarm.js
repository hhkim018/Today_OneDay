
import mainImg from "../assets/main_img.png";

//캐시로해서 하루에 하나만 
const Alarm = (saying) =>{
if (Notification.permission === "granted") {
    showNotification();
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        showNotification();
      }
    });
  }
  

function showNotification(){
  console.log(saying)
    const notification = new Notification("오늘,하루", {
        body: `${saying.word} - ${saying.people}`,
        // icon: mainImg
      });   
}
}



export default Alarm;