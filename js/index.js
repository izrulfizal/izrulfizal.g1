var startPanel = document.getElementById("startPanel");
startPanel.style.display = "none";

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    if(h > 12){
        ampm = "PM";
    }
    if(h < 12){
        ampm = "AM";
    }
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timeBar').innerHTML =
    h + ":" + m + " " + ampm;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}

startTime();
document.getElementById('startBtn').onclick = function() {
    if (startPanel.style.display == "none"){
        startPanel.style.display = "block";
      
    }
    else if (startPanel.style.display == "block") {
        startPanel.style.display = "none";
        
    }
    else{
        console.log("Start Panel Debug");
    }
}


document.getElementById('firstButton').onclick = function() {

    alert ("Belum siap lagi la :(");
}

document.getElementById('secondButton').onclick = function() {

    alert ("Ni pun belum siap lagi :(");
}