var number = Math.floor(Math.random() * 10);;

var tries = 5;

var i = 1;
do{
    var guess = window.prompt("Enter any number between 0-9");
    if(guess == number){
        document.getElementById("correct").innerHTML = "You have guessed the number " + number + " correctly.";
        break;
    } else{
        window.alert("Incorrect! " + (tries - i) + " tries remaining");
    }
    i++;
    if(i == 5){
        document.getElementById("correct").innerHTML = "Sorry! you were unable to guess the number " + number + " correctly.";
    }
}while(i <= 5);

