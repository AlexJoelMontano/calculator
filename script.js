let first = document.querySelector("#digit1");
let second = document.querySelector("#digit2");
let resultsDisplay = document.querySelector("#results");
let operandType = "";
function add(){
    second.style.display = "block";
    first.style.display = "none";
    operandType = "add";
    return operandType;
}
function subtract(){
    second.style.display = "block";
    first.style.display = "none";
    operandType = "subtract";
    return operandType;
}
function multiply(){
    second.style.display = "block";
    first.style.display = "none";
    operandType = "multiply";
    return operandType;
}
function divide(){
    second.style.display = "block";
    first.style.display = "none";
    operandType = "divide";
    return operandType;
}

let numbers = document.querySelector(".numbers");

function number(num){
    if(first.style.display == "block"){
        first.value += num;
    }
    else{
        second.value += num;
    }
}

function reset(){
    first.value = "";
    second.value = "";
    second.style.display = "none";
    first.style.display = "block";
}

function equals(){
    if(operandType == "add"){    
        results = parseInt(first.value) + parseInt(second.value);
        first.style.display = "block";
        second.style.display = "none";
        first.value = results;
        second.value = "";
    }
    else if(operandType == "subtract"){
        results = parseInt(first.value) - parseInt(second.value);
        first.style.display = "block";
        second.style.display = "none";
        first.value = results;
        second.value = "";
    }
    else if(operandType == "multiply"){
        results = parseInt(first.value) * parseInt(second.value);
        first.style.display = "block";
        second.style.display = "none";
        first.value = results;
        second.value = "";
    }
    else if(operandType == "divide"){
        results = parseInt(first.value) / parseInt(second.value);
        first.style.display = "block";
        second.style.display = "none";
        first.value = results;
        second.value = "";
    }
}