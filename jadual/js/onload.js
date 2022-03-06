day = 1;

function insertName(){

    for (let i = 1; i < 5; i++) {
        inputName = "input" + i;
        groupName = "group" + i;
        var x = document.getElementById(inputName).value;
        document.getElementById(groupName).innerText = x;
        
      }
}



function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text1", ev.target.innerText);
    ev.dataTransfer.setData("text2", window.getComputedStyle(ev.target).backgroundColor);

    console.log(window.getComputedStyle(ev.target).backgroundColor)
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text1");
    var color = ev.dataTransfer.getData("text2");
    ev.target.innerText = "\t" + day + "\n" + data;
    ev.target.style.backgroundColor = color;
    ev.target.style.whiteSpace = "pre";
    day = day + 1;
    console.log(day);

  }


  function Popup() {
    element = document.getElementById("mainTable").outerHTML;
    console.log(element);
    var mywindow = window.open('', 'new div', 'height=400,width=600');
    mywindow.document.write('<html><head><title></title>');
    mywindow.document.write('<link rel="stylesheet" href="css/table.css" type="text/css" />');
    mywindow.document.write('</head><body style="margin-top:50px;"><center>');
    mywindow.document.write(element);
    mywindow.document.write('</center></body></html>');
    mywindow.document.close();
    mywindow.focus();
    setTimeout(function(){mywindow.print();},1000);
    return true;
}