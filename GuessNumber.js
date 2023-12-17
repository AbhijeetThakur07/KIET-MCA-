//guess the number
let a=Math.random()*100
a=Number.parseInt(a)

var count=0;
while(count<100){
let b=prompt("Enter the number ")
b=Number.parseInt(b)
document.write("your score is:- "+(100-count))

if(a==b){
    alert("Congrtulations!! You guessed it right")
    count++
    alert("your score is:- "+ (100-count))
}
else if(a>b)
{
    count++
    alert("Try a bigger number")
}
else
{
    count++
    alert("Try a smaller number")
}
