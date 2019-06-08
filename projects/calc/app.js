var firstNum = 0;
var secondNum = 0;
var numberBtns = document.querySelectorAll('.num');
var oprClicked = false;
var activeOpr;
var historyText = 'No history yet.';
var isHistoryShowing = false;
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

const histCont = document.getElementById('history-cont');
const histTextDiv = document.getElementById('history-text');
const histTag = document.getElementById('history-tag');
const triangle = document.getElementById('triangle');

screen.innerHTML = firstNum;

histTextDiv.innerHTML = historyText;

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
    if (historyText == 'No history yet.') {
        historyText = firstNum;
    } else if (activeOpr != xrt) {
        historyText += '<br>' + firstNum;
    }
    switch (activeOpr) {
        case add:
            historyText += ' + ' + secondNum;
            firstNum += parseFloat(secondNum);
            break;
        case sub:
            historyText += ' - ' + secondNum;
            firstNum -= parseFloat(secondNum);
            break;  
        case mul:
            historyText += ' x ' + secondNum;
            firstNum *= parseFloat(secondNum);
            break;
        case div:
            historyText += ' / ' + secondNum;
            firstNum /= parseFloat(secondNum);
            break;
        case pow:
            historyText += ' ^ ' + secondNum;
            firstNum = Math.pow(firstNum, parseFloat(secondNum));
            break;
        case inv:
            historyText += ' ^ -1 ';
            firstNum = 1 / firstNum;
            break;
        case xrt:
        // testing for which nth root we are taking
            if (secondNum.endsWith('1') && !secondNum.endsWith('11')) {
                historyText += '<br>' + secondNum +  'st root of ' + firstNum;
            } else if (secondNum.endsWith('2') && !secondNum.endsWith('12')) {
                historyText += '<br>' + secondNum +  'nd root of ' + firstNum;
            } else if (secondNum.endsWith('3') && !secondNum.endsWith('13')) {
                historyText += '<br>' + secondNum +  'rd root of ' + firstNum;
            } else {
                historyText += '<br>' + secondNum +  'th root of ' + firstNum;
            }
        // testing for an odd root of negative number
            if (firstNum.toString().startsWith('-') && Number.isInteger((secondNum - 1) / 2)) {
                firstNum = firstNum.toString().slice(1);
                firstNum = Math.pow(parseFloat(firstNum), (1 / parseFloat(secondNum)));
                firstNum = '-' + firstNum.toString();
            } else {
                firstNum = Math.pow(firstNum, (1 / parseFloat(secondNum)));
            }
            break;
    }
    if (firstNum.toString().includes('.00000000') || firstNum.toString().includes('.99999999')) {
    	firstNum = Math.round(firstNum);
    }
    if (isNaN(firstNum)) {
        firstNum = 'Error';
    }
    historyText += ' =<br>' + firstNum;
    oprClicked = false;
    screen.innerHTML = firstNum;
    histTextDiv.innerHTML = historyText;
    scrollDown();
}

function clearOut() {
    firstNum = 0;
    secondNum = 0;
    oprClicked = false;
    hasBeenNegated = false;
    activeOpr = '';
    screen.innerHTML = firstNum;
}

function toggleHistory() {
    isHistoryShowing = !isHistoryShowing;
    if (isHistoryShowing) {
        histCont.style.bottom = '-160px';
        triangle.style.transform = 'rotate(180deg)';
    } else {
        histCont.style.bottom = '-2px';
        triangle.style.transform = 'rotate(0deg)';
    }
}

function scrollDown() {
    histTextDiv.scrollTop = histTextDiv.scrollHeight;
}

for (var i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener('click', function() {
        numberTrigger(this.innerHTML);
    });
}

document.addEventListener('keydown', function(e) {
    if (Number.isInteger(parseFloat(e.key)) || e.key === '.') {
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

histTag.addEventListener('click', function() {toggleHistory();});
