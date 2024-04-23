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
        results = parseFloat(first.value) + parseFloat(second.value);
        first.style.display = "block";
        second.style.display = "none";
        first.value = results;
        second.value = "";
    }
    else if(operandType == "subtract"){
        results = parseFloat(first.value) - parseFloat(second.value);
        first.style.display = "block";
        second.style.display = "none";
        first.value = results;
        second.value = "";
    }
    else if(operandType == "multiply"){
        results = parseFloat(first.value) * parseFloat(second.value);
        first.style.display = "block";
        second.style.display = "none";
        first.value = results;
        second.value = "";
    }
    else if(operandType == "divide"){
        results = parseFloat(first.value) / parseFloat(second.value);
        first.style.display = "block";
        second.style.display = "none";
        first.value = results.toFixed(9);
        second.value = "";
      
    }
}

function period(){
    let period = ".";
    if(first.style.display == "block"){
        let displaying = first.value += period;
        parseFloat(displaying);
    }
    else{
        let displaying = second.value += period;
        parseFloat(displaying);
    }
}