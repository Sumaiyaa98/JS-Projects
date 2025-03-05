let result = document.getElementById("result");
let tempSymbol = document.getElementById("tempSymbol");
let input = document.getElementById("degreeInput");
let convertBtn = document.getElementById("convertBtn");
let inputUnit = document.getElementById("inputUnit");
let celcius;
let fehrenheit;


convertBtn.onclick =  function(){
    if(inputUnit.value == "celcius" && outputUnit.value == "fahrenheit"){
        let fahrenheit = (input.value*9/5)+32;
        result.innerHTML = fahrenheit.toFixed(2);
        tempSymbol.innerHTML = "<sub>°F</sub>";
    }
    else if(inputUnit.value == "fahrenheit" && outputUnit.value == "celcius"){
        let celcius = (input.value-32)*5/9;
        result.innerHTML = celcius.toFixed(2);
        tempSymbol.innerHTML = "<sub>°C</sub>";
    }

}
