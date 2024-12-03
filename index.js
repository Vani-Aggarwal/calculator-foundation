const container = document.querySelector(".container")
const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
const keys = document.querySelector(".keys");

keys.addEventListener('click' , e => {
    if (e.target.matches("button")){
       let key = e.target;
       let action = key.dataset.action;
       let keyContent = key.textContent;
       let dislayedNum = display.textContent;
       let previousKeyType = container.dataset.previousKeyType;


        if(!action){
            console.log('number key!');
            if (dislayedNum === '0' || previousKeyType === 'operator'){
                display.textContent = keyContent;
            }else {
                display.textContent = dislayedNum + keyContent;
            }
        }



        if(action === 'divide' ||
            action === 'multiply' ||
            action === "minus" || 
            action === 'plus'){
            console.log("operator key!!")
            container.dataset.previousKeyType = 'operator';

        }

        if (action === 'clear'){
            console.log('clear key!')
        }
        if(action === 'equal'){
            console.log('equal key!')
        }
        if(action === 'decimal'){
            console.log('decimal key!!')
            display.textContent = dislayedNum + '.';
        }
    }
})

