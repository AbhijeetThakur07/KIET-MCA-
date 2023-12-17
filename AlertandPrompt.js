//alert
let a2 = alert("This is an alert box");
document.write(a2)

//prompt
let a3 = prompt("Enter your age:")
document.write(a3)
a4=Number.parseInt(a3)12
if (a3 == "18") {
alert("Not eligible to vote");
}

//switch case
let age = prompt("What is your age??")
age = Number.parseInt(age);
var az=JSON.stringify(age)
document.write(az)
document.write(typeof az)


switch (age) {
 case 12:
  document.write("Your age is 12")
  break;
 case 11:
  document.write("Your age is 11")
  break;
 case 10:
  document.write("Your age is 10")
  break;
 case 9:
  document.write("Your age is 9")
  break;
 case 8:
 document.write("Your age is 8")
 break;
 default:
 document.write("Your age is not special")
}
