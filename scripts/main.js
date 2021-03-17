let activeSum = 0;
let storedSum = 0;
let result = 0;
let buts = document.querySelectorAll('button');
let keys = document.querySelectorAll('.keys');
let zero = document.getElementById('_0');
let one = document.getElementById('_1');
let two = document.getElementById('_2');
let three = document.getElementById('_3');
let four = document.getElementById('_4');
let five = document.getElementById('_5');
let six = document.getElementById('_6');
let seven = document.getElementById('_7');
let eight = document.getElementById('_8');
let nine = document.getElementById('_9');
let ac = document.getElementById('AC');
let decimal = document.getElementById('decimal');
let plus = document.getElementById('add');
let sub = document.getElementById('subtract');
let divi = document.getElementById('divide');
let mult = document.getElementById('multiply');
let equals = document.getElementById('equals');


    buts.forEach(but =>{
        but.addEventListener('click', e => {
            const key = e.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            let botDisplay = document.getElementById('botDisplay');
            const displayedNum = botDisplay.textContent;
                if (e.target.matches('button')) {
                    if (!action) {
                        if (displayedNum === '0') {
                          botDisplay.textContent = keyContent;
                        } else {
                          botDisplay.textContent = displayedNum + keyContent;
                        }
                      } 
                        if (displayedNum.length >= 9 && !action) {
                          botDisplay.textContent = displayedNum;
                        }
                    else if (action === "clear") {
                        botDisplay.textContent = 0;
                    }
        };
    });
});

    document.addEventListener('keydown', placeHolderFunction);

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