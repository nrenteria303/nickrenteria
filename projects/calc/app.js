var firstNum = 0;
var secondNum = 0;
var numberBtns = document.querySelectorAll('.num');
var oprClicked = false;
var activeOpr;
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const screen = document.getElementById('screen');
const clear = document.getElementById('clear');
const negate = document.getElementById('neg');
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const mul = document.getElementById('mul');
const div = document.getElementById('div');
const pow = document.getElementById('pow');
const inv = document.getElementById('inv');
const xrt = document.getElementById('xrt');
const cbt = document.getElementById('cbt');
const equals = document.getElementById('equ');

screen.innerHTML = firstNum;

negate.addEventListener('click', function() {
    if (!oprClicked) {
        firstNum *= -1;
        screen.innerHTML = firstNum;
    } else {
        secondNum *= -1;
        screen.innerHTML = secondNum;
    }
    console.log(firstNum);
    console.log(secondNum);
    return;
});

function numberTrigger(key) {
    if (!oprClicked) {
        if (firstNum === 0 || firstNum == 'Infinity') { 
            firstNum = key;
        } else {
            if (key === '.' && firstNum.includes('.')) {
                firstNum;
            } else {
                firstNum += key;      
            }
        }
        screen.innerHTML = firstNum;
    } else {
        if (secondNum === 0 || secondNum == 'Infinity') {
            secondNum = key;
        } else {
            if (key === '.' && secondNum.includes('.')) {
                secondNum;
            } else {
                secondNum += key;      
            }
        }    	
        screen.innerHTML = secondNum;
    }
}

function oprClickHelp(opr) {
    if (!oprClicked) {
        oprClicked = true;
        secondNum = 0;
        activeOpr = opr;
    } else if (secondNum != 0) {
        total();
        secondNum = 0;
        oprClicked = true;
        activeOpr = opr;
    } else {
        oprClicked = true;
        activeOpr = opr;
    }
}

function total() {
    firstNum = parseFloat(firstNum);
    switch (activeOpr) {
        case add:
            firstNum += parseFloat(secondNum);
            break;
        case sub:
            firstNum -= parseFloat(secondNum);
            break;  
        case mul:
            firstNum *= parseFloat(secondNum);
            break;
        case div:
            firstNum /= parseFloat(secondNum);
            break;
        case pow:
            firstNum = Math.pow(firstNum, parseFloat(secondNum));
            break;
        case inv:
            firstNum = 1 / firstNum;
            break;
        case xrt:
            firstNum = Math.pow(firstNum, (1 / secondNum));
            break;
    }
    oprClicked = false;
    screen.innerHTML = firstNum;
    console.log(firstNum);
    console.log(secondNum);
}

function clearOut() {
    firstNum = 0;
    secondNum = 0;
    oprClicked = false;
    hasBeenNegated = false;
    activeOpr = '';
    screen.innerHTML = firstNum;
}

for (var i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener('click', function() {
        numberTrigger(this.innerHTML);
    });
}

document.addEventListener('keydown', function(e) {
    if (numbers.includes(e.key)) {
		numberTrigger(e.key);
    } 
    else if (e.key === 'Enter') {
        e.preventDefault();
        total();
    } 
    else if (e.key === 'Backspace') {
        clearOut();
    } else {
        switch (e.key) {
            case '+':
            oprClickHelp(add);
            break;
        case '-':
            oprClickHelp(sub);
            break;
        case '*':
            oprClickHelp(mul);
            break;
        case '/':
            oprClickHelp(div);
            break;
        default:
            return;
        }
    }
});

clear.addEventListener('click', function() {
	clearOut();
});

add.addEventListener('click', function() {oprClickHelp(add);});
sub.addEventListener('click', function() {oprClickHelp(sub);});
mul.addEventListener('click', function() {oprClickHelp(mul);});
div.addEventListener('click', function() {oprClickHelp(div);});
pow.addEventListener('click', function() {oprClickHelp(pow);});
inv.addEventListener('click', function() {oprClickHelp(inv); total();});
xrt.addEventListener('click', function() {oprClickHelp(xrt);});
equals.addEventListener('click', function() {total();});
