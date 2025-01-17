const decrease = document.getElementById("decrease");
        const increase = document.getElementById("increase");
        const reset = document.getElementById("reset");
        const result = document.getElementById("result");
        let count = 0;


        decrease.onclick = function(){
            count--;
            
            if(count>0){
                result.textContent = count;
            }else{
                count = 0;
                result.textContent = count;

            }
        }
        increase.onclick = function(){
            count++;
            result.textContent = count;

        }
        reset.onclick = function(){
            count = 0;

            result.textContent = count;
        }

