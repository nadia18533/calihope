function run(){
  var elem = document.getElementById("C1");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = 170 + "px"; 
      elem.style.left = pos + "px"; 
    }
  }

//?\document.getElementById("C1").style.transform = "translateX(10px)";
//    console.log("ff");
//} console.log(run());

//function run(){
//return Math.floor(Math.random() * Math.floor(max));
//}
//console.log(getRandomInt(20));