var emptySpace = "";
var sign = "";

function moneyTree (linesToPrint, signToPrint) {
    for(var i = 0; i < linesToPrint; i++) {
        for (var j = 0; j < linesToPrint - i - 1; j++) { //decrements value of j by 1 w/ each iteration
            emptySpace = emptySpace + " "
        }
            for (var l = 0; l < i * 2 + 1; l++) {  //arithmetic expression 2n + 1 to generate a sequence of 1, 3, 5, 7... w/ each iteration 
                sign = sign + signToPrint
            }
            console.log(emptySpace+sign);
            sign="";
            emptySpace=""
    }
}

moneyTree(5,"$");
moneyTree(7,"*");
moneyTree(10,"+");