const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
const dateData = new Date();

const seconds = dateData.getSeconds();
const secondsDeg = ((seconds / 60) * 360) + 90;

const minutes = dateData.getMinutes();
const minutesDeg = ((minutes / 60) * 360) + 90;

const hours = dateData.getHours();
const hoursDeg = ((hours / 12) * 360) + 90;

const date = dateData.getDate();
document.getElementById("date").innerHTML = date;

if (seconds == 0) {
secondHand.style.transition = "all 0s";
secondHand.style.transform = `rotate(${secondsDeg}deg)`;
}

else {
secondHand.style.transition = "all .5s cubic-bezier(0.75, 2, 0.75, 1)";
secondHand.style.transform = `rotate(${secondsDeg}deg)`;
minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
hourHand.style.transform = `rotate(${hoursDeg}deg)`;

}
}

setInterval(setDate, 1000);
