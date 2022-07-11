"use strict"

//script for circle area

document.getElementById("circleRadiusButton").addEventListener("click", circleAreaFormula);

function circleAreaFormula() {
    let formData = document.querySelector("#circleRadiusInput").value;
    countedCircleArea = parseInt(formData) * 3.14
    document.querySelector('#circleRadiusResult').innerHTML = countedCircleArea;
};

