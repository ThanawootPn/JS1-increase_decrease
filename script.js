var number = document.getElementById("myNumber");

// increaseFunction =() =>{
//     console.log("increase number");
//     document.getElementById("myNumber").innerHTML = number+=1;
// }

// decreaseFunction =() => {
//     console.log("decrease number");
//     document.getElementById("myNumber").innerHTML = number-=1;
// }

$(document).ready(function () {
  $("#btn1").click(function () {
    document.getElementById("myNumber").innerHTML = number += 1;
    if(number > 5 && number < 10)$("h2").css('color', 'yellow');
    else if(number > 9 )$("h2").css('color', 'red');
  });
  $("#btn2").click(function () {
    document.getElementById("myNumber").innerHTML = number -= 1;
    if(number > 5 && number < 10)$("h2").css('color', 'yellow');
    else if(number > 9 )$("h2").css('color', 'red');
    else $("h2").css('color', 'teal');
  });
  $("#btn3").click(function () {
    document.getElementById("myNumber").innerHTML = number = 0;
    $("h2").css('color', 'teal');
  });
});





