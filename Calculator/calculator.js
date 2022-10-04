let btn=document.getElementById("btnCalculator");
let ans=document.getElementById("answer");
let numOneError=document.getElementById("numOneError");
let numTwoError=document.getElementById("numTwoError");
let operatorError=document.getElementById("operationError");
let finalResult;
let numOneStatus,numTwoStatus,operatorStatus=true; // true ka data shi dl

numOneError.style.display="none";
numTwoError.style.display="none";
operatorError.style.display="none";



btn.addEventListener("click",function(){
    let num1=document.getElementById("firstNumber");
let num2=document.getElementById("secondNumber");
let operator=document.getElementById("operation");

checkValidation(num1,num2,operator);

   
if(numOneStatus && numTwoStatus && operatorStatus){
    num1=parseInt(num1.value);
    num2=parseInt(num2.value);

    

    switch(operator.value){
        case "add":  finalResult= num1+num2; break;

        case "minus":  finalResult= num1-num2; break;

        case "multiply":  finalResult= num1*num2; break;

        case "division":  finalResult= num1/num2; break;

        case "moculus":  finalResult= num1%num2; break;

        case "default": console.log("Operation failed..");
           break;

    }

    ans.innerHTML=finalResult;

}

    function checkValidation(num1,num2,operator){
        
if(num1.value=="" || num1.value== null || num1.value==undefined){
    numOneError.style.display="inline-block";
    numOneStatus=false;
}
else{
    numOneError.style.display="none"; 
    numOneStatus=true;
}

if(num2.value=="" || num2.value== null || num2.value==undefined){
    numTwoError.style.display="inline-block";
    numTwoStatus=false;
}
else{
    numTwoError.style.display="none"; 
    numTwoStatus=true;
}

if(operator.value=="empty"){
    operatorError.style.display="inline-block";
    operatorStatus=false;
}
else{
    operatorError.style.display="none"; 
    operatorStatus=true;
}

    }
});