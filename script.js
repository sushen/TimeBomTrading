const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let hrPosition = 100;
let minPosition = 120;
let secPosition = 620;

HOURHAND.style.transform = "rotate(" + hrPosition +"deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition +"deg)";
SECONDHAND.style.transform = "rotate(" + secPosition +"deg)";
