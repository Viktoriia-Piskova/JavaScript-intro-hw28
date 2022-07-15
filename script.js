"use strict"

function authorise() {
    let usersName = prompt("What is your name?", "Misterious stranger");
    document.querySelector("#userName").innerHTML = usersName;

}

authorise()

//script for circle area

document.getElementById("circleRadiusButton").addEventListener("click", circleAreaFormula);

function circleAreaFormula() {
    let formData = parseFloat(document.querySelector("#circleRadiusInput").value);
    if (formData > 0) {
        let countedCircleArea = formData ** 2 * 3.14;
        document.querySelector('#circleRadiusResult').innerHTML = `<p style="color: red;"> ${countedCircleArea} square meters!</p>`;
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
        document.getElementById("countedSpeedOutput").innerHTML = `<p> You need to ride ${speedResult} km/h to get there in time!</p>`;
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

function wealthLevel(){
    let userDollarInput = parseFloat(document.querySelector("#userDollarInput").value);
    if (userDollarInput <= 100 && userDollarInput > 0){
        let percentWidth = 100 - userDollarInput;
        document.querySelector("#pointer").style.width =  `${percentWidth}%`;
        document.querySelector("#container").style.backgroundColor = "#06851c"
        
    }
    else if(userDollarInput <= 0){
        document.querySelector("#pointer").style.width = "99%";
    }
    else{
        
        document.querySelector("#pointer").style.width = "68%";
        


    }

    

}



//this script doesnt work I don't know why




// document.querySelector("#countUserDollars").addEventListener("click", wealthLevelText);

// function wealthLevelText(){
//     let userDollarInput = parseFloat(document.querySelector("#userDollarInput").value);
//     if (userDollarInput <= 0){
//         document.querySelector("#luxuryRange").innerHTML = "<p>No way! You must be kidding me</p>"
//     }
//     else if(userDollarInput >0 && userDollarInput < 30){
//         document.querySelector("#luxuryRange").innerHTML = "<p>You are a poor person</p>"
//     }

//     else if(userDollarInput >=30 && userDollarInput < 80){

//     document.querySelector("#luxuryRange").innerHTML = "<p>Not bad! You have enough money</p>";
//    }

//    else{
//     document.querySelector("#luxuryRange").innerHTML = "<p>I can't beleive! You are so rich!</p>";
//    }

// }








