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
    
    var startPanel = document.getElementById("startPanel");
    if (startPanel.style.display === "block"){
        startPanel.style.display = "none";
    }
    else{
        startPanel.style.display = "block";
    }
}