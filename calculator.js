
function calcularValor(percentageTip){
    const totalBill = +document.getElementById("input-bill").value;
    const numberPeople = +document.getElementById("input-person").value;
    const tip = (totalBill * percentageTip)/100;
    const tipAmountPerson = (tip / numberPeople);
    const totalGeneral = (totalBill + tip);
    const totalGeneralPerson = (totalGeneral/numberPeople);
    const resultsAmount = document.getElementById("Results-amount");
    resultsAmount.innerHTML = "$" + tipAmountPerson.toFixed(2);
    const resultsPerson = document.getElementById("results-person");
    resultsPerson.innerHTML = "$" + totalGeneralPerson.toFixed(2);
}


const button5 = document.getElementById("percent-5");
button5.addEventListener('click',function(event){
    calcularValor(5);
});

const button10 = document.getElementById("percent-10");
button10.addEventListener('click',function(event){
    calcularValor(10);
});

const button15 = document.getElementById("percent-15");
button15.addEventListener('click',function(event){
    calcularValor(15);
});

const button25 = document.getElementById("percent-25");
button25.addEventListener('click',function(event){
    calcularValor(25);
});

const button50 = document.getElementById("percent-50");
button50.addEventListener('click',function(event){
    calcularValor(50);
});

const buttonCustom = document.getElementById("button-custom");
buttonCustom.addEventListener('keypress',function(event){
    const percentageCustom = +buttonCustom.value;
    calcularValor(percentageCustom);
});

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener('click', function(event){
    const totalBill = document.getElementById("input-bill");
    const numberPeople = document.getElementById("input-person");
    const resultsAmount = document.getElementById("Results-amount");
    const resultsPerson = document.getElementById("results-person");
    totalBill.value = "";
    numberPeople.value = "";
    resultsAmount.innerHTML = "$0.00";
    resultsPerson.innerHTML = "$0.00";
    buttonCustom.value = "";
});










