// at first we will add the method to generate time
let displayTime = document.querySelector("#displayTime");
let alramBtn = document.querySelector(".alarmSet");

let clockLogo = document.querySelector(".clock-logo");

alramBtn.style.display = "none";
// the audio is here
let audio = new Audio("assets/alarm.mp3");
audio.loop = true;

// alramBtn.onclick = () => {
setInterval(() => {
  let CurrentDate = new Date();
  // console.log(CurrentDate);
  let hours = CurrentDate.getHours();
  let mins = CurrentDate.getMinutes();
  let sec = CurrentDate.getSeconds();
  let allTime = hours + ":" + mins + ":" + sec;

  displayTime.innerText = allTime;

  let setHours = document.querySelector("#setHours").value;
  let setminutes = document.querySelector("#setminutes").value;
  let setseconds = document.querySelector("#setseconds").value;

  let allUserValues = setHours + ":" + setminutes + ":" + setseconds;
  // console.log(allUserValues);

  if (allTime === allUserValues) {
    alramBtn.innerText = "Clear Alarm";
    audio.play();
    alramBtn.style.display = "block";
    clockLogo.classList.add("clockAnimation");
    // alramBtn.style.opacity = "0.8";
  }
  alramBtn.onclick = () => {
    audio.pause();
    alramBtn.style.display = "none";
    clockLogo.classList.remove("clockAnimation");
  };
}, 1000);
// };
