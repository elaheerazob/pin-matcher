 function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        console.log('get 3 Degite pin ', pin);
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput =document.getElementById('types-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value ='';
        }
    }else{
       
        const previesNumber = calcInput.value;
        const newNumber = previesNumber + number;
        calcInput.value=newNumber;
    }
    
})

function pinMatch(){
    const displayPin =document.getElementById('display-pin').value;
    const typesNumbers =document.getElementById('types-numbers').value;
    if(displayPin == typesNumbers){
        const successMassage =document.getElementById("seccess");
        successMassage.style.display ='block';
    }else{
        const failMassage =document.getElementById("fail");
        failMassage.style.display ='block';
    }
} 
