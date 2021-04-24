var amountZAR = prompt("What amount in ZAR would you like to convert?")
amountZAR = parseFloat(amountZAR)
var amountGBP = (amountZAR / 20.39).toFixed(2)
alert(amountZAR+" ZAR is "+amountGBP+" in GBP")