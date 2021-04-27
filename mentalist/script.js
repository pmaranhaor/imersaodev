var secretNumber = parseInt(Math.random() *11)
var attempt = 3

while (attempt > 0) {
  var  guess = parseInt(prompt("Type a number from 1 to 10: "))
  if (secretNumber == guess){
    alert("Yaaaaas!")
    break
  } else if(guess > secretNumber){
    alert("The secret number is less than your guess")
    attempt = attempt - 1
  } else if (guess < secretNumber){
    alert("The secret number is greater than your guess")
    attempt = attempt - 1
  }
}
if (guess != secretNumber){
  alert("Game over! The secret number is "+secretNumber)
}
