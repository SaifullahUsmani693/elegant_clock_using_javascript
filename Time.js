// Elements
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");
let M = document.getElementById("M");

let d = new Date().toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
});
// 05:09:54 PM
let time;
let other;
setInterval(() => {
    console.log("somthing");
    d = new Date().toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    time = d.split(":");
    other = time[2].split(" ");
    hour.innerHTML = time[0];
    minute.innerHTML = time[1];
    seconds.innerHTML = other[0];
    M.innerHTML = other[1];

}, 1000);