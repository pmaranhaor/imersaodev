var firstValue = parseInt(prompt("Type the first value: "))
var secondValue = parseInt(prompt("Type the second value: "))


var operation = parseInt(prompt("Type your operation: 1- Addition 2- Subtraction 3- Multiplication 4- Division"))

if (operation == 1) {
  var result = firstValue + secondValue
  document.write("<h2>"+ firstValue + " + " + secondValue + " = " + result +"</h2>")
}
else if (operation == 2){
  var result = firstValue - secondValue
  document.write("<h2>"+ firstValue + " - " + secondValue + " = " + result +"</h2>")
}
else if(operation == 3){
  var result = firstValue * secondValue
  document.write("<h2>"+ firstValue + " x " + secondValue + " = " + result +"</h2>")
}
else if (operation == 4){
  var result = firstValue / secondValue
  document.write("<h2>"+ firstValue + " / " + secondValue + " = " + result +"</h2>")
}

else {
  document.write("<h2>Invalid option</h2>")
}
