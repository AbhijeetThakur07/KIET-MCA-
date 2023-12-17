function print_star(){
var num = document.getElementById("userinput").value
console.log(num)
if (num <= 0) {
  document.querySelector('.pattern').innerHTML = ("Sorry!!! You have entered a invalid number")
}
else {
  document.querySelector('.pattern').innerHTML = " "
  for (var i = 0; i < num; i++) {
    for (var j = 1; j <= num; j++) {
      if ((i + j) >= num) {
        document.querySelector('.pattern').innerHTML += "*";
      } else {
        document.querySelector('.pattern').innerHTML += " ";
      }
    }
    document.querySelector('.pattern').innerHTML += "<br>";
  }
}
}
