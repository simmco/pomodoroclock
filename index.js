window.onload = function(){

$('.menu').click(function () {
  
  var min = 25;
  var sec = 60;
  
 
   
  setInterval(function() {    
    document.getElementById("timer").innerHTML = min + " : " + sec ;
  sec--;
    if(sec==0) {
      min--;
      sec=60;
      if(min==0) {
        min=25;
      }
    }
    
  },1000);
  
});  
  
}
