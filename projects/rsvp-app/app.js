// document.addEventListener('DOMContentLoaded', () => {

const form = document.getElementById('registrar');
const input = form.querySelector('input');
const mainDiv = document.querySelector('.main');
const ul = document.getElementById('invitedList');

const filterYesLabel = document.getElementById('filter-yes-label');
const filterYesCheckBox = document.getElementById('filter-yes-checkbox');
const filterNoLabel = document.getElementById('filter-no-label');
const filterNoCheckBox = document.getElementById('filter-no-checkbox');

const lis = ul.children;

function filterInvitees(response) {
    for (let i = 0; i < lis.length; i++) {
        let li = lis[i];
        if (li.className === 'responded-' + response) {
            li.style.display = '';
        } else {
            li.style.display= 'none';
        }
    }
}

filterYesCheckBox.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
        filterInvitees('yes');
        filterNoCheckBox.style.display = 'none';
        filterNoLabel.style.display = 'none';
    } else {
        for (let i = 0; i < lis.length; i++) {
            let li = lis[i];
            li.style.display = '';
        }
        filterNoCheckBox.style.display = '';
        filterNoLabel.style.display = '';
    }
});

filterNoCheckBox.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
        filterInvitees('no');
        filterYesCheckBox.style.display = 'none';
        filterYesLabel.style.display = 'none';
    } else {
        for (let i = 0; i < lis.length; i++) {
            let li = lis[i];
            li.style.display = '';
        }
        filterYesCheckBox.style.display = '';
        filterYesLabel.style.display = '';
    }
});

function createLi(text) {
    function createElement(elementName, property, value) {
        const element = document.createElement(elementName);
        element[property] = value;
        return element;
    }
    function appendToLI(elementName, property, value) {
        const element = createElement(elementName, property, value);
        li.appendChild(element);
        return element;
    }
    const li = document.createElement('li');
    appendToLI('span', 'textContent', text);
    appendToLI('label', 'textContent', 'I\'ll be there').appendChild(createElement('input', 'type', 'checkbox'));
    appendToLI('label', 'textContent', 'Can\'t make it').appendChild(createElement('input', 'type', 'checkbox'));
    appendToLI('button', 'textContent', 'edit');
    appendToLI('button', 'textContent', 'remove');
    return li;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value == '' || input.value == ' ') {
        alert('Please enter an invitee name');
    } else {
        const text = input.value;
        input.value = '';
        const li = createLi(text);
        ul.appendChild(li);
    }
});

ul.addEventListener('change', (e) => {
    const checkbox = e.target;
    const checkboxLabel = checkbox.parentNode;
    const checked = checkbox.checked;
    listItem = checkbox.parentNode.parentNode;

    if (checked && checkboxLabel.textContent === "I'll be there") {
        listItem.className = 'responded-yes';
        checkboxLabel.nextElementSibling.style.display = 'none';
    } else if (checked && checkboxLabel.textContent === "Can't make it") {
        listItem.className = 'responded-no';
        checkboxLabel.previousElementSibling.style.display = 'none';
    } else {
        listItem.className = '';
        checkboxLabel.nextElementSibling.style.display = '';
        checkboxLabel.previousElementSibling.style.display = '';
    }
});

ul.addEventListener('click', (e) => {
    const button = e.target;
    if (button.tagName === 'BUTTON') {
        const li = button.parentNode;
        const ul = li.parentNode;
        const action = button.textContent;
        const nameActions = {
            remove: () => {
                ul.removeChild(li);
            },
            edit: () => {
                const span = li.firstElementChild;
                const input = document.createElement('input');
                input.type = 'text';
                input.value = span.textContent;
                li.insertBefore(input, span);
                li.removeChild(span);
                button.textContent = 'save';
            },
            save: () => {
                const input = li.firstElementChild;
                const newSpan = document.createElement('span');
                newSpan.textContent = input.value;
                li.insertBefore(newSpan, input);
                li.removeChild(input);
                button.textContent = 'edit';
            }
        }
        nameActions[action](); // select and run action in button's name
    }
});



// }); // END OF DOMContentLoaded EVENT LISTENER