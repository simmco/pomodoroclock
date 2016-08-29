window.onload = function() {

  $('#sessionMinus').click(function() {
    var min = parseInt(document.getElementById("sessionT").innerHTML);
    if (min >= 2) {
      document.getElementById("sessionT").innerHTML = min - 1;
      document.getElementById("timer").innerHTML = document.getElementById("sessionT").innerHTML + ":" + "00";
      clearInterval(intervalId);
      running = false;
    }
  })

  $('#sessionPlus').click(function() {
    var min = parseInt(document.getElementById("sessionT").innerHTML);
    document.getElementById("sessionT").innerHTML = min + 1;
    document.getElementById("timer").innerHTML = document.getElementById("sessionT").innerHTML + ":" + "00";
    clearInterval(intervalId);
    running = false;
  })

  $('#breakMinus').click(function() {
    var min = parseInt(document.getElementById("breakT").innerHTML);
    if (min >= 2) {
      document.getElementById("breakT").innerHTML = min - 1;
      clearInterval(intervalId);
      running = false;
    }
  })

  $('#breakPlus').click(function() {
    var min = parseInt(document.getElementById("breakT").innerHTML);
    document.getElementById("breakT").innerHTML = min + 1;
    clearInterval(intervalId);
    running = false;
  })

  //variable for setInterval
  var intervalId = 0;
  //variable to check if timer is running
  var running = false;
  //variable to check if it is break time
  var breakT = false;

  $('.menu').click(function() {
    var minS = parseInt(document.getElementById("sessionT").innerHTML);
    var minT = parseInt(document.getElementById("breakT").innerHTML);
    // running or stop
    var sec = 59;
    if (running === false) {
      // setInterval 1000
      intervalId = setInterval(function() {
        // is BreakTime running
        if (breakT === false) {
          console.log(minS);
          document.getElementById("timer").innerHTML = minS - 1 + " : " + sec;
          sec--;
          if (sec == -1) {
            minS--;
            sec = 59;
            if (minS == 0) {
              minS = document.getElementById("sessionT").innerHTML;
              document.getElementById("session").innerHTML = "Break";
              breakT = true;
            }
          }
        } else {
          document.getElementById("timer").innerHTML = minT - 1 + " : " + sec;
          sec--;
          if (sec == -1) {
            minT--;
            sec = 59;
            if (minT == 0) {
              minT = document.getElementById("breakT").innerHTML;
              document.getElementById("session").innerHTML = "Session";
              breakT = false;

            }
          }

        }
      }, 1000);
      running = true;
    } else {
      clearInterval(intervalId);
      running = false;
    }

  });
}
