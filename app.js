var min = 0;
var sec = 0;
var millsec = 0;
var interval;

var millsecheading = document.getElementById('millsec');
var secheading = document.getElementById('sec');
var minheading = document.getElementById('min');
var startbtn = document.getElementById('start');

function f_msec() {
    millsec++;
    millsecheading.innerHTML = millsec;
    if (millsec == 100){
        sec++;
        secheading.innerHTML = sec;
        millsec = 0;
    }else if (sec == 60){
        min++;
        millsecheading.innerHTML = 0;
        secheading.innerHTML = 0;
        minheading.innerHTML = min;
        sec = 0;
    }
}


function start() {
    interval = setInterval(f_msec, 10);
    startbtn.disabled = true;
}

function pause() {
    clearInterval(interval);
    startbtn.disabled = false;
}

function reset() {
    clearInterval(interval);
    millsec = 0;
    sec = 0;
    min = 0;
    millsecheading.innerHTML = '00';
    secheading.innerHTML = sec;
    minheading.innerHTML = min;
}

function record() {
    console.log(min+" : "+sec+" : "+millsec);
}