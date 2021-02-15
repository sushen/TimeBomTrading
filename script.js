const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date)
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();


let hrPosition = hr;
let minPosition = min;
let secPosition = sec;



console.log(hr);
console.log(min);
console.log(sec);


HOURHAND.style.transform = "rotate(" + hrPosition +"deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition +"deg)";
SECONDHAND.style.transform = "rotate(" + secPosition +"deg)";
