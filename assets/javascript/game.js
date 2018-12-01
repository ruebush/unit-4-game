//randomly selects a number between 18-120 for player to match

var randomNum = 18 + Math.floor(Math.random() * 120);

//produces the number the player must match

$("#winning-number").html(randomNum);
console.log(randomNum);


//randomly selects a number between 1-12 for each element

var elem1 = 1 + Math.floor(Math.random() * 12);
var elem2 = 1 + Math.floor(Math.random() * 12);
var elem3 = 1 + Math.floor(Math.random() * 12);
var elem4 = 1 + Math.floor(Math.random() * 12);

//set all variables to 0

var userTotal = 0;
var wins = 0;
var losses = 0;
$("#user-score").html(userTotal);
$("#user-wins").html(wins);
$("#user-loss").html(losses);

//reset all variables once game is completed

var reset = function() {
    userTotal = 0;
    randomNum = 18 + Math.floor(Math.random() * 120);
    elem1 = 1 + Math.floor(Math.random() * 12);
    elem2 = 1 + Math.floor(Math.random() * 12);
    elem3 = 1 + Math.floor(Math.random() * 12);
    elem4 = 1 + Math.floor(Math.random() * 12);
    console.log(randomNum);
    $("#winning-number").html(randomNum);
    $("#user-score").html(userTotal);
    $("#wins").html(wins);
    $("#losses").html(losses);
}

//win - loss function


var winCheck = function() {
    if (userTotal == randomNum) {
        wins++;
        alert(" :D ");
        $("#user-wins").html(wins);
        reset();

    } else if (userTotal > randomNum) {
        losses++;
        alert(" :'( ");
        $("#user-loss").html(losses);
        reset();
    }
};

//clicking on an element image produces a random number for the user

$("#e1").on("click", function() {
    userTotal = userTotal + elem1;
    console.log(userTotal);
    $("#user-score").html(userTotal);
    winCheck();
})

$("#e2").on("click", function() {
    userTotal = userTotal + elem2;
    console.log(userTotal);
    $("#user-score").html(userTotal);
    winCheck();
})

$("#e3").on("click", function() {
    userTotal = userTotal + elem3;
    console.log(userTotal);
    $("#user-score").html(userTotal);
    winCheck();
})

$("#e4").on("click", function() {
    userTotal = userTotal + elem4;
    console.log(userTotal);
    $("#user-score").html(userTotal);
    winCheck();
})