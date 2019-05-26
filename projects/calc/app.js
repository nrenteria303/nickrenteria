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
    return;
});

function numberTrigger(key) {
    if (!oprClicked) {
        if (firstNum === 0) { 
            firstNum = key;
        } else {
            if (key === '.' && firstNum.includes('.')) {
                return;
            } else {
                firstNum += key;      
            }
        }
        screen.innerHTML = firstNum;
    } else {
        if (secondNum === 0) {
            secondNum = key;
        } else {
            if (key === '.' && secondNum.includes('.')) {
                return;
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
    } else {
        total();
        secondNum = 0;
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
        default:
            return;
    }
    oprClicked = false;
    screen.innerHTML = firstNum;
}

function clearOut() {
    firstNum = 0;
    secondNum = 0;
    oprClicked = false;
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
    } else if (e.key == 'Enter') {
        total();
    } else if (e.key == 'Backspace') {
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
equals.addEventListener('click', function() {total();});

