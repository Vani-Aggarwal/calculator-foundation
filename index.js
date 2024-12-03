const container = document.querySelector(".container")
const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
const keys = document.querySelector(".keys");

keys.addEventListener('click' , e => {
    if (e.target.matches("button")){
       const key = e.target;
       const action = key.dataset.action;
       const keyContent = key.textContent;
       let displayedNum = display.textContent;
       const previousKeyType = container.dataset.previousKeyType;


        if(!action){
            console.log('number key!');
            if (displayedNum === '0' || previousKeyType === "operator") {
                display.textContent = keyContent;
                container.dataset.previousKeyType = "number";
            } else {
                display.textContent = displayedNum + keyContent;
            }
            
            
        }

        if(action === 'divide' ||
            action === 'multiply' ||
            action === "minus" || 
            action === 'plus'){
            console.log("operator key!!")
            container.dataset.previousKeyType = "operator";
            container.dataset.firstValue = displayedNum;
            container.dataset.operator = action;

        }

        if (action === 'clear'){
            console.log('clear key!')
            display.textContent = '0';
        }
        if(action === 'equal'){
            console.log('equal key!');
            const firstValue = container.dataset.firstValue;
            const operator = container.dataset.operator;
            const secondValue = displayedNum;
            
            const calculate = (a, operator ,b) => {
                switch(operator){
                    case 'divide':
                        result = parseInt(a)/ parseInt(b) ;
                        break;
                    case 'multiply':
                        result = parseInt(a)*parseInt(b);
                        break;
                    case 'minus':
                        result = parseInt(a)-parseInt(b);
                        break;
                    case 'plus':
                        result = parseInt(a)+parseInt(b); 
                        break;   
                }  

                console.log(firstValue , operator , secondValue)
                console.log(result)

                display.textContent = result
                return result;
    
            }
            calculate(firstValue , operator , secondValue);



        }
        if(action === 'decimal'){
            console.log('decimal key!!')
            display.textContent = displayedNum + '.';
        }
    }
})

