let activeSum = 0;
let storedSum = 0;
let result = 0;
let operation = null;
let buts = document.querySelectorAll('button');
let keys = document.querySelectorAll('.keys');

    buts.forEach(but =>{
        but.addEventListener('click', e => {
            const key = e.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            let botDisplay = document.getElementById('botDisplay');
            let topDisplay = document.getElementById('topDisplay');
            const displayedNum = botDisplay.textContent;
                if (key.matches('button')) {
                    if (!action) {
                        if (displayedNum === '0') {
                          botDisplay.textContent = keyContent;
                        } else {
                          botDisplay.textContent = displayedNum + keyContent;
                          activeSum = parseFloat(botDisplay.textContent);
                        }
                      } 
                        if (displayedNum.length >= 9 && !action) {
                          botDisplay.textContent = displayedNum;
                        }
                    if (action === "clear") {
                        botDisplay.textContent = 0;
                        topDisplay.textContent = 0;
                        storedSum = 0;
                    } if (action === 'decimal') {
                        if (botDisplay.textContent.includes(".")) {
                            botDisplay.textContent = displayedNum;
                        } else {
                        botDisplay.textContent = displayedNum + '.';
                        }
                    } if (key.id == 'add' || e.target.id == 'subtract' || e.target.id == 'multiply' || e.target.id == 'divide') {
                        operation = key.id;
                        console.log(operation);
                    } 
    };
});
    
});

    function add (a,b) {
        return parseFloat(a) + parseFloat(b);
    }

    function subtract (a,b) {
        return parseFloat(a) - parseFloat(b);
    }

    function multiply (a,b) {
        return parseFloat(a) * parseFloat(b);
    }

    function divide (a,b) {
        return parseFloat(a) / parseFloat(b);
    }

    function calculate(a,b,operation){
        if(operation == 'add'){
            return add(a,b);
        }
        else if(operation == 'subtract'){
            return subtract(a,b);
        }
        else if(operation == 'multiply'){
            return multiply(a,b);
        }
        else if(operation == 'divide'){
            return divide(a,b);
        }
    }