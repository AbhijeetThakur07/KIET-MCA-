//create a type of string and add a number to it.
let a = "Abhijeet"
let b = "singh" + "</br>"
document.write(a + b)
//type
document.write(typeof (a + b) + "</br>")
//constant object
const obj = {
name: "Abhijeet Singh",
Age: 21
 }
document.write(JSON.stringify(obj) + "</br>")
//change value in constant
obj['name'] = "Yuvraj Singh" + "</br>"
obj['Age']='22' +"</br>"
document.write(obj.name)
document.write(obj.Age)
// word meaning dictionary
const dict = {
abhijeet: 'good boy',  //key-value pair
yuvraj: 'bad boy',
yakka: 'hardwork'
 }
document.write(JSON.stringify(dict) + "</br>")
