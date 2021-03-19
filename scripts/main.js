let buts = document.querySelectorAll('button');
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
                    if (action === 'clear') {
                        botDisplay.textContent = 0;
                        topDisplay.textContent = 0;
                        firstNum = '';
                        secondNum = '';
                        result = '';
                        operation = null;
                    } 
                    if(action === 'del'){
                        if(displayNum === 0){
                            botDisplay.textContent = displayNum;
                            if (x.length <= 0) {
                                botDisplay.textContent = 0;
                            }
                        }
                        else if (botDisplay.textContent === "DONT / 0") {
                            botDisplay.textContent = 0;
                        }
                        else {
                            x = botDisplay.textContent.toString();
                            x = x.slice(0,-1);
                            botDisplay.textContent = Number(x);
                            secondNum = Number(x);
                            if (x.length <= 0) {
                                botDisplay.textContent = 0;
                            }
                        }
                    }
                    if (action === 'decimal') {
                        if (botDisplay.textContent.includes(".")) {
                            botDisplay.textContent = displayNum;
                        } 
                        else {
                        botDisplay.textContent = displayNum + '.';
                        }
                    } 
                  else if (key.id == 'add' || key.id == 'subtract' || key.id == 'multiply' || key.id == 'divide') {
                        if (firstNum === '' && operation === null) {
                            operation = key.id;
                            firstNum = parseFloat(botDisplay.textContent);
                            topDisplay.textContent = `${firstNum}`;
                            botDisplay.textContent = 0;
                            } 
                            else if (secondNum === '') {
                                secondNum = parseFloat(calculate(displayNum, firstNum, operation));
                                secondNum = parseFloat(secondNum.toFixed(5));
                                topDisplay.textContent = `${secondNum}`;
                                botDisplay.textContent = 0;
                                operation = key.id;
                                } 
                                else {
                                firstNum = parseFloat(botDisplay.textContent);
                                secondNum = parseFloat(calculate(firstNum, secondNum, operation));
                                secondNum = parseFloat(secondNum.toFixed(5));
                                topDisplay.textContent = `${secondNum}`;
                                botDisplay.textContent = 0;
                                operation = key.id;
                                }
                    };
                    if (key.id === 'equals') {
                        if (operation === null) {
                            botDisplay.textContent = displayNum;
                        } else {
                        firstNum = parseFloat(botDisplay.textContent);
                        secondNum = parseFloat(topDisplay.textContent);
                        result = calculate(firstNum, secondNum, operation);
                        botDisplay.textContent = `${result}`;
                        topDisplay.textContent = 0;
                        firstNum = '';
                        secondNum = `${result}`;
                        operation = null;
                        if (result === NaN || secondNum === NaN) {
                            topDisplay.textContent = "Error";
                            botDisplay.textContent = 0;
                            firstNum = '';
                            secondNum = '';
                        }
                        if (botDisplay.textContent.length >= 10) {
                            const tempNum = `${result}`;
                            const resultStr = tempNum.toString();
                            result = Number(resultStr.slice(0, 10));
                            result = parseFloat(result.toFixed(5));
                            botDisplay.textContent = `${result}`;
                            topDisplay.textContent = 0;
                            firstNum = '';
                            secondNum = `${result}`;
                            operation = null;
                        }
                    }
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
        if (a === 0) {
            return "DONT / 0";
        }
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