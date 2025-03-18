const display = document.querySelector('input')

function appendToDislpay(input){
        display.value+=input;
}

function clearDislpay(){
    display.value = "";
}


    function clearInput(){
        display.value = display.value.slice(0, -1);
    }

function calculate(){
    try{
        display.value = eval(display.value);// eval function is ike a builtin calculator

    }
    catch(error){
        display.value = ""
    }

}