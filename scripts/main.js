let buts = document.querySelectorAll('button');
let keys = document.querySelectorAll('.keys');
let operation = null;
let secondNum = '';
let firstNum = '';

    buts.forEach(but =>{
        but.addEventListener('click', e => {
            const key = e.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            let botDisplay = document.getElementById('botDisplay');
            let topDisplay = document.getElementById('topDisplay');
            const displayNum = botDisplay.textContent;
                if (key.matches('button')) {
                    if (!action) {
                        if (displayNum === '0') {
                          botDisplay.textContent = keyContent;
                        } 
                        else {
                          botDisplay.textContent = displayNum + keyContent;
                        }
                      } 
                        if (displayNum.length >= 9 && !action) {
                          botDisplay.textContent = displayNum;
                        }
                    if (action === "clear") {
                        botDisplay.textContent = 0;
                        topDisplay.textContent = 0;
                        firstNum = '';
                        secondNum = '';
                    } if (action === 'decimal') {
                        if (botDisplay.textContent.includes(".")) {
                            botDisplay.textContent = displayNum;
                        } 
                        else {
                        botDisplay.textContent = displayNum + '.';
                        }
                    } 
                  else if (key.id == 'add' || key.id == 'subtract' || key.id == 'multiply' || key.id == 'divide') {
                        operation = key.id;
                        if (firstNum === '') {
                            firstNum = parseFloat(botDisplay.textContent);
                            console.log(firstNum);
                            console.log(secondNum);
                            topDisplay.textContent = `${firstNum}`;
                            botDisplay.textContent = 0;
                        } else if (secondNum === '') {
                        operation = key.id;
                        secondNum = parseFloat(calculate(displayNum, firstNum, operation));
                        console.log(secondNum);
                        topDisplay.textContent = `${secondNum}`;
                        botDisplay.textContent = 0;
                        console.log(operation);
                        } else {

                        }
                    };
                    if (key.id === 'equals') {
                        firstNum = parseFloat(botDisplay.textContent);
                        secondNum = parseFloat(topDisplay.textContent);
                        result = calculate(firstNum, secondNum, operation);
                        botDisplay.textContent = `${result}`;
                        topDisplay.textContent = 0;
                    }
                }});
});

    function add (a,b) {
        return parseFloat(a) + parseFloat(b);
    }

    function subtract (a,b) {
        return parseFloat(b) - parseFloat(a);
    }

    function multiply (a,b) {
        return parseFloat(a) * parseFloat(b);
    }

    function divide (a,b) {
        return parseFloat(b) / parseFloat(a);
    }

    function calculate(a,b,operation){
        let result = '';
        if (operation === 'add'){
            result = add(a,b);
        }
        else if (operation === 'subtract'){
            result = subtract(a,b);
        }
        else if (operation === 'multiply'){
            result = multiply(a,b);
        } 
        else if (operation === 'divide'){
            result = divide(a,b);
        }
        return result;
    }