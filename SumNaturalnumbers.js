// program to add first n natural numbers
let sum=0
let n=prompt("enter the number")
n=Number.parseInt(n)
for (i=1 ; i<=n ; i++){
sum+=(i+1)
}
document.write("Sum of first"+n+"natural numbers is"+sum)
