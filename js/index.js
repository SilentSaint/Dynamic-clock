const secondsHand = document.querySelector(".sc");
const minutesHand = document.querySelector(".mn");
const hoursHand = document.querySelector(".hr");

function updateTime() {
  const now = new Date();
  const seconds = now.getSeconds() * 6;
  const minutes = now.getMinutes() * 6;
  const hours = now.getHours() * 30;
  secondsHand.style.transform = `rotate(${seconds}deg)`;
  minutesHand.style.transform = `rotate(${minutes}deg)`;
  hoursHand.style.transform = `rotate(${hours}deg)`;
}

setInterval(updateTime, 1000);
