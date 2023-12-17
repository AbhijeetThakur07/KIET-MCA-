//operators
let a1 = 10
let b1=2
document.write("a1+b1")
document.write("</br>")
document.write(a1+b1)

document.write(a1++)//10
document.write("</br>")
document.write(a1)//11
document.write("</br>")

document.write(a1--)//11
document.write("</br>")
document.write(a1) //10
document.write("</br>")
document.write(++a1)  //11
document.write("</br>")

//Comparison operator
let comp1 = 6
let comp2 = "6"
document.write("comp1==comp2" + "</br>", comp1 == comp2)
document.write("</br>")
document.write("comp1===comp2" + "</br>", comp1 === comp2)
document.write("</br>")
document.write("comp1!=comp2" + "</br>", comp1 == comp2)
document.write("</br>")
document.write("comp1!==comp2" + "</br>", comp1 === comp2)
document.write("</br>")

//logical operators
let log1 = 2
let log2 = 3
document.write(log1 > log2 || log1 != log2)
document.write("</br>")
document.write(!true)
document.write("</br>")
