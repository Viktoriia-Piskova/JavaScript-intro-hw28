"use strict"

function authorise() {
    let usersName = prompt("Hello! Please enter your name:", "Vasylyna");

    if (usersName == null){
        document.querySelector("#userName").innerHTML = "the one that pressed cancel";

    }

    else{
        document.querySelector("#userName").innerHTML = usersName;
    }
    

}

authorise()

//script for circle area

document.getElementById("circleRadiusButton").addEventListener("click", circleAreaFormula);

function circleAreaFormula() {
    let formData = parseFloat(document.querySelector("#circleRadiusInput").value);
    if (formData > 0) {
        let countedCircleArea = formData ** 2 * 3.14;
        document.querySelector('#circleRadiusResult').innerHTML = `<p style="color: red;"> ${countedCircleArea} square pixels!</p>`;
    }
    else {
        document.querySelector('#circleRadiusResult').innerHTML = "<p>Can't count :( Please, enter valid number > 0</p>";
    }
};



//script for speed

document.querySelector("#startCounting").addEventListener("click", speedFormula);

function speedFormula() {
    
    let userDistanceInput = parseFloat(document.querySelector("#userDistanceInput").value);
    let userTimeInput = parseFloat(document.querySelector("#userTimeInput").value);
    
    if (userDistanceInput > 0 && userTimeInput > 0) {
        let speedResult = userDistanceInput / userTimeInput;
        document.getElementById("countedSpeedOutput").innerHTML = `<p style="color: red;"> You need to ride ${speedResult} km/h to get there in time!</p>`;
    }
    else {
        document.getElementById("countedSpeedOutput").innerHTML = "<p>Please, enter valid time and distance. It must be number > 0</p>";
    }
    
}


//script for currency

document.querySelector("#countUserDollars").addEventListener("click", countEuro);

function countEuro() {
    let userDollarInput = parseFloat(document.querySelector("#userDollarInput").value);
    if (userDollarInput > 0) {
        let countedEuros = userDollarInput * 0.99;
        document.querySelector("#summInEuro").innerHTML = `<p style="color: red;">You've got ${countedEuros} euro!</p>`;
    }
    else if (userDollarInput == 0) {
        document.querySelector("#summInEuro").innerHTML = "<p>Oh... Go and earn at least 1 dollar</p>";
    }
    else {
        document.querySelector("#summInEuro").innerHTML = "<p>Please, enter valid number: 0 or higher</p>";
    }

}

//script for pseudo scale luxury meter

document.querySelector("#countUserDollars").addEventListener("click", wealthLevel);

function wealthLevel() {
    let userDollarInput = parseFloat(document.querySelector("#userDollarInput").value);
    if (userDollarInput <= 100 && userDollarInput > 0) {
        let percentWidth = 100 - userDollarInput;
        document.querySelector("#pointer").style.width = `${percentWidth}%`;
        document.querySelector("#pointer").style.animationName = "none";
        document.querySelector("#container").style.backgroundColor = "#06851c";
        document.querySelector("#container").style.animationName = "none";


    }
    else if (userDollarInput <= 0) {
        document.querySelector("#pointer").style.width = "100%";
        document.querySelector("#container").style.backgroundColor = "#acafac75";
    }

    else if (userDollarInput > 100) {
        document.querySelector("#pointer").style.width = "0%";
        document.querySelector("#container").style.backgroundColor = "#06851c";
        document.querySelector("#pointer").style.animationName = "none";
        document.querySelector("#container").style.animationName = "very-rich-animation";

    }
    else {
        document.querySelector("#pointer").style.width = "100%";
        document.querySelector("#container").style.backgroundColor = "#acafac75";
        document.querySelector("#container").style.animationName = "none";

    }



}



//script fo text under luxury meter




document.querySelector("#countUserDollars").addEventListener("click", wealthLevelText);

function wealthLevelText(){
    let userDollarInput = parseFloat(document.querySelector("#userDollarInput").value);
    if (userDollarInput <= 0){
        document.querySelector("#luxuryComment").innerHTML = "<p>No way! You must be kidding me...</p>"
    }
    else if(userDollarInput >0 && userDollarInput < 30){
        document.querySelector("#luxuryComment").innerHTML = "<p>Meh! You are a poor person</p>"
    }

    else if(userDollarInput >=30 && userDollarInput <= 99){

    document.querySelector("#luxuryComment").innerHTML = "<p>Not bad! You have enough money</p>";
   }

   else if(userDollarInput >=30 && userDollarInput >= 100){

    document.querySelector("#luxuryComment").innerHTML = "<p>More than 100 euro? You are the richest person I know!!!</p>";
   }

   else{
    document.querySelector("#luxuryComment").innerHTML = "<p>Can't wait to count your money...</p>";
   }

}



// document.querySelector("#speedAnswer").style.animationName = "answer-flip";





